import React from "react";
import ReactDOM from "react-dom";
import { SplitView } from "react-better-splitviews";
import { useResizeDetector } from "react-resize-detector";

function View({ content }) {
  const { width, height, ref } = useResizeDetector();
  const isMedium = height >= 400 && width >= 300;

  return (
    <div
      ref={ref}
      style={{
        minWidth: "100%",
        minHeight: "100%",
        background: "#eee",
        border: "1px solid lightgray",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: isMedium ? 8 : 0,
          padding: 32,
          margin: isMedium ? "40px auto" : "0 auto",
          boxShadow: "rgba(0, 0, 0, 0.02) 2px 3px 7px 2px",
          maxWidth: 275,
        }}
      >
        <h1>{content.title}</h1>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: 12,
            color: "#333",
          }}
        >
          <li>
            <i>width: {Math.round(width)}px</i>
          </li>
          <li>
            <i>height: {Math.round(height)}px</i>
          </li>
        </ul>
        {content.paragraphs.map((paragraph, index) => (
          <p key={`par-${index}`}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <SplitView
      style={{
        margin: 4,
        border: "1px solid #333",
        height: "calc(100vh - 10px)",
        width: "calc(100vw - 10px)",
      }}
    >
      <SplitView style={{ width: 300 }} direction="column">
        <View
          style={{ minHeight: 120 }}
          content={{
            title: "Explore",
            paragraphs: [
              "minHeight: 120px",
              "In here you may explore the world.",
            ],
          }}
        />
        <View
          style={{ minHeight: 120 }}
          content={{
            title: "Outline",
            paragraphs: [
              "minHeight: 120px",
              "In here you may outline your life goals.",
            ],
          }}
        />
        <View
          style={{ minHeight: 120 }}
          content={{
            title: "Brainstorm",
            paragraphs: [
              "minHeight: 120px",
              "In here you may define what happiness is.",
            ],
          }}
        />
      </SplitView>
      <SplitView direction="column">
        <SplitView style={{ height: 500 }}>
          <View
            content={{
              title: "View 1",
              paragraphs: [
                // "minWidth: 15%",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
              ],
            }}
          />
          <View
            style={{ minWidth: 250 }}
            content={{
              title: "View 2",
              paragraphs: [
                "minWidth: 250px",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
              ],
            }}
          />
          <View
            style={{ minWidth: 125, maxWidth: 250 }}
            content={{
              title: "View 3",
              paragraphs: [
                "minWidth: 125px",
                "maxWidth: 250px",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc est. Pellentesque tempus molestie turpis, sed imperdiet quam volutpat at. ",
              ],
            }}
          />
        </SplitView>
        <View
          style={{ height: "25%", maxHeight: "90%" }}
          content={{
            title: "Panel",
            paragraphs: [
              "maxHeight: 90%",
              "This is a great panel. Do something about it, or don't. idk",
            ],
          }}
        />
      </SplitView>
    </SplitView>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
