import {cleanup, render} from '@testing-library/react';
import {Tile} from './Tile-9';

it("renders without error", () => {
  const content = [{title: "test"}]
  render(<Tile content={content}/>)
})
it("should display image when image value is provided", () => {
  const content = [{title: "test", image: "https://www.adp.com/-/media/adp/blog/articles/featuredimages/8/5/851501_2022-workforce-trends-reliable-data-expertise-will-power-resiliency.jpg?rev=7056e0f00fec4fb0938e3511fbe703c0&h=300&w=714&la=en&hash=5DBFFBF9BBC86C2F6B93B4A5795FA2C5"}];
  const {queryByRole} = render(<Tile content={content}/>);
  const imageElement = queryByRole("img");
  expect(imageElement).toBeTruthy();
})
it("should NOT display image when image value is missing", () => {
  //Arrange
  const content = [{title: "test", image: ""}];

  //Act
  const {queryByRole} = render(<Tile content={content}/>);

  //Assert
  const imageElement = queryByRole("img");
  expect(imageElement).toBeFalsy();
})
