const HeadphonesIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill="currentColor"
        d="M18.706 8.568v-.243c0-.995-.847-1.845-1.953-2.087C16.377 2.743 13.483 0 10 0 6.518 0 3.624 2.742 3.247 6.238c-1.13.242-1.953 1.092-1.953 2.087v.243C.564 8.713 0 9.442 0 10.29c0 .874.565 1.578 1.294 1.724v.242c0 1.19 1.177 2.16 2.635 2.16h.542V6.894C4.518 3.811 6.988 1.311 10 1.311c3.035 0 5.53 2.548 5.53 5.704v7.403h.54c1.436 0 2.636-.971 2.636-2.16v-.243c.73-.146 1.294-.874 1.294-1.724 0-.874-.565-1.578-1.294-1.723Z"
      />
      <path
        fill="currentColor"
        d="M14.044 11c-.423 0-.753.34-.753.777 0 1.869-1.482 3.398-3.294 3.398-1.811 0-3.294-1.53-3.294-3.398 0-.437-.33-.777-.753-.777s-.753.34-.753.777c0 2.476 1.765 4.563 4.141 4.903v2.665c0 .364.283.655.636.655.353 0 .635-.316.635-.655v-2.69c2.377-.34 4.165-2.403 4.165-4.903a.716.716 0 0 0-.73-.752Z"
      />
      <path
        fill="currentColor"
        d="M10 13.685c-1.248 0-2.26-1.044-2.26-2.33V6.33C7.74 5.044 8.752 4 10 4c1.246 0 2.258 1.044 2.258 2.33v5.024c0 1.287-1.012 2.33-2.259 2.33Z"
      />
    </svg>
  );
};

export default HeadphonesIcon;
