import { mergeStyleSets } from "@uifabric/merge-styles";

export const getClassNames = () => {
  return mergeStyleSets({
    body: {
      background: "red",

      height: "100vh",
    },

    viewPort: {
      backgroundColor: "white",
      width: "250vh",
      height: "130vh",
    },
    title: {
      fontWeight: 'bolder',
      fontSize: '30vh'
    }
  });
};
