'use strict';
import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '27064900-d3df62b31ff8569162b43397f';
  OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true';

  constructor(keyword = null) {
    this.page = 1;
    this.keyword = keyword;
    this.per_page = 40;
  }

  fetchPhotos() {
    return axios.get(
      ` ${this.#BASE_URL}?key=${this.#API_KEY}&q=${this.keyword}${this.OPTIONS}&page=${
        this.page
      }&per_page=${this.per_page}`,
    );
  }
}
