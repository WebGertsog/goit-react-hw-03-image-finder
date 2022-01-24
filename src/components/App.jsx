import React, { Component } from 'react';
import { Api } from '../Api/Api';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import LoaderSpin from './Loader';
import Modal from './Modal';
import { GlobalCSS } from './GlobalCSS';
import { Wrapper } from './Wrapper.jsx';

export class App extends Component {
  state = {
    images: [],
    filter: '',
    page: 1,
    loading: false,
    selected: null,
    totalHits: 0,
    islast: false,
  };

  // Component Did Mount
  componentDidMount() {
    this.getImages();
  }

  // Component Did Update
  componentDidUpdate(_, prevState) {
    if (
      prevState.filter !== this.state.filter ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  // Form Submit
  formSubmit = filter => {
    if (filter === this.state.filter) {
      return;
    }
    this.setState({ filter: filter, images: [], page: 1, islast: false });
  };

  // Get Images
  getImages = () => {
    this.toggleModal();
    const { page, filter } = this.state;

    Api(filter, page)
      .then(data => {
        if (data.hits.length === 0) {
          this.setState({ totalHits: 0 });
          toast.error(`Nothing found for your request 😔`);

          return;
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalHits: data.totalHits,
        }));
      })
      .then(this.islastPage)
      .then(this.autoScroll)
      .catch(error => console.log(error.message))
      .finally(this.toggleModal);
  };

  // Auto Scroll
  autoScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  // Selected Img
  selectedImg = url => {
    this.setState({ selected: url, showModal: true });
  };

  // Click Load More Btn
  clickLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // Is last Page
  islastPage = () => {
    const { totalHits, page } = this.state;
    const totalPage = totalHits / 12;

    if (page > totalPage && totalHits !== 0) {
      this.setState({ islast: true });
      toast(`👀 This is the last page`);
      return;
    }
  };

  // Close Modal
  closeModal = () => {
    this.setState({ selected: null });
  };

  // Toggle Modal
  toggleModal = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  render() {
    const { images, totalHits, loading, islast, selected } = this.state;

    return (
      <>
        <GlobalCSS />
        <Wrapper>
          <Toaster position="top-right" />
          <Searchbar propSubmit={this.formSubmit} />
          <ImageGallery images={images} selectedImg={this.selectedImg} />
          {loading && <LoaderSpin />}
          {selected && <Modal url={selected} onClose={this.closeModal} />}
          {totalHits > 0 && !loading && !islast && (
            <Button onClick={this.clickLoadMoreBtn} />
          )}
        </Wrapper>
      </>
    );
  }
}
