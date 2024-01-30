// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//   }

//   async updatePage() {
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df11cdd72c744330b1136031bcdf2f10&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(40);
//     let parsedata = await data.json();
//     this.props.setProgress(70);
//     this.setState(
//       {
//         articles: parsedata.articles,
//         totalResults: parsedata.totalResults,
//         loading: false,
//       },
//       () => {
//         // After setting state, update the page
//         if (this.state.page < 1) {
//           this.setState({ page: 1 });
//         }
//       }
//     );
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updatePage();
//   }

//   handlePrevClick = async () => {
//     if (this.state.page > 1) {
//       this.setState({ page: this.state.page - 1 }, () => {
//         this.updatePage();
//       });
//     }
//   };

//   handleNextClick = async () => {
//     if (
//       this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)
//     ) {
//       this.setState({ page: this.state.page + 1 }, () => {
//         this.updatePage();
//       });
//     }
//   };
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     this.updatePage();
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df11cdd72c744330b1136031bcdf2f10&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     this.props.setProgress(40);
//     let parsedata = await data.json();
//     this.props.setProgress(70);
//     this.setState(
//       {
//         articles: this.state.articles.concat( parsedata.articles),
//         totalResults: parsedata.totalResults,
//       },
//       () => {
//         // After setting state, update the page
//         if (this.state.page < 1) {
//           this.setState({ page: 1 });
//         }
//       }
//     );
//     this.props.setProgress(100);
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">NewsWorld - Top News</h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           {/* {!this.state.loading && this.state.articles.map((element, index) => { */}
//           {this.state.articles.map((element, index) => {
//             const uniqueKey = `${element.url}_${index}`;
//             return (
//               <div className="container my-3" key={uniqueKey}>
//                 <NewsItem
//                   title={element.title}
//                   description={element.description}
//                   author={element.author}
//                   content={element.content}
//                   publishedAt={element.publishedAt}
//                   imgUrl={element.urlToImage}
//                   newsUrl={element.url}
//                 />
//               </div>
//             );
//           })}
//         </InfiniteScroll>
//         {/* <div className="d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             className="btn btn-success"
//             type="button"
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page >=
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             className="btn btn-success"
//             type="button"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       </div>
//     );
//   }
// }