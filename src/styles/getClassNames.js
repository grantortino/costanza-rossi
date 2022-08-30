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
  });
};

// spalteLinks, spalteMittel, spalteRechts
