// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

const primary = {
  field: {
    border: "2px solid",
    borderColor: "transparent",
    bg: "#F6F7F9",
    borderRadius: "15px",
    h: "56px",
    fontSize: "sm",
    paddingLeft: "8",
    _placeholder: {
      color: "red",
    },

    _readOnly: {
      boxShadow: "none !important",
      userSelect: "all",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
  addon: {
    border: "2px solid",
    borderColor: "transparent",
  },
};

export const SelectStyles = {
  variants: {
    primary,
  },
};
