import { mergeStyleSets } from "@uifabric/merge-styles";

export const getClassNames = () => {
  return mergeStyleSets({
    body: {
      display: "flex",
      flexDirection: "row",
    },
    spalteLinks: {
      backgroundColor: "#C7B699",
      height: "100vh",
      width: "45vh",
    },
    spalteMittel: {
      backgroundColor: "#C7B699",
      height: "100vh",
      width: "100%",
    },
    spalteRechts: {
      backgroundColor: "#C7B699",
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
      },
      ":visited": {
        color: "#786644",
      },
      ":active": {
        color: "green",
      },
      _hover: {
        color: "green",
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
