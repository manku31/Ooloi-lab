export const CONSTANTS = Object.freeze({
  formData: [
    {
      comp: "TextInput",
      isRequired: true,
      valuePath: "main.title",
      props: {
        id: "main.title",
        label: "title",
        sublabel: "title",
        placeholder: "title",
      },
    },
    {
      comp: "DropdownSingle",
      isRequired: false,
      valuePath: "main.dropdown",
      props: {
        id: "5spum7",
        label: "dropdown",
        options: [
          {
            reactKey: "l2OnzF",
            value: "india",
            display: "india",
          },
          {
            reactKey: "VVpN7t",
            value: "japan",
            display: "japan",
          },
          {
            reactKey: "FLMPvq",
            value: "germany",
            display: "germany",
          },
        ],
      },
    },
    {
      comp: "TextInput",
      isRequired: true,
      valuePath: "main.enterTextHere",
      props: {
        id: "dutnvz",
        label: "enter text here",
      },
    },
    {
      comp: "CheckboxList",
      isRequired: false,
      valuePath: "main.checkbox",
      props: {
        id: "rle96m",
        label: "checkbox",
        options: [
          {
            reactKey: "zUO0or",
            value: "japan",
            display: "Japan",
          },
          {
            reactKey: "yEwXcc",
            value: "germany",
            display: "Germany",
          },
          {
            reactKey: "0qJSKt",
            value: "india",
            display: "India",
          },
        ],
      },
    },
    {
      comp: "RadioList",
      isRequired: true,
      valuePath: "main.radioList",
      props: {
        id: "kh8dvv",
        label: "Radio list",
        sublabel: "Select a radio input",
        options: [
          {
            reactKey: "kCwnIj",
            value: "mango",
            display: "Mango",
          },
          {
            reactKey: "DnqlBr",
            value: "apple",
            display: "Apple",
          },
          {
            reactKey: "H7vPfc",
            value: "oranges",
            display: "Oranges",
          },
        ],
      },
    },
    {
      comp: "DatePicker",
      isRequired: true,
      valuePath: "main.datePicker",
      props: {
        id: "xd0ijp",
        label: "Date Picker",
        sublabel: "Select Date",
      },
    },
    {
      comp: "TextInput",
      isRequired: false,
      valuePath: "main.location",
      props: {
        id: "n9283z",
        label: "Location",
        sublabel: "Enter location",
      },
    },
  ],
});
