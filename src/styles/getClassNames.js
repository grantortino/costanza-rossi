import { mergeStyleSets } from "@uifabric/merge-styles";

export const getClassNames = () => {
  const col1 = "#C7B699";
  const col2 = "#B2AE97";
  return mergeStyleSets({
    body: {
      display: "flex",
      flexDirection: "row",
    },
    spalteLinks: {
      backgroundColor: col2,
      height: "100vh",
      width: "45vh",
    },
    spalteMittel: {
      backgroundColor: col2,
      height: "100vh",
      width: "100%",
    },
    spalteRechts: {
      backgroundColor: col2,
      height: "100vh",
      width: "45vh",
    },
    titleSvg: {
      // height: "25vh",
      width: "100%",
      marginTop: 16,
    },
    links: {
      ":link": {
        color: "#786644",
        textStyle: "none",
      },
      ":visited": {
        color: "#786644",
        textStyle: "none",
      },
      ":active": {
        color: "green",
        textStyle: "none",
      },
      _hover: {
        color: "green",
        textStyle: "none",
      },
    },
  });
};

// spalteLinks, spalteMittel, spalteRechts

// a:link {
//   color: red;
// }

// /* visited link */
// a:visited {
//   color: green;
// }

// /* mouse over link */
// a:hover {
//   color: hotpink;
// }

// /* selected link */
// a:active {
//   color: blue;
// }
