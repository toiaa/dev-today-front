const PreviewIcon: React.FC<IconProps> = ({
    width = 20,
    height = 20,
}: IconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1.4C3.24035 1.4 0 5.15635 0 7.00018C0 8.84401 3.24035 12.6004 7 12.6004C10.7597 12.6004 14 8.84401 14 7.00018C14 5.15635 10.7597 1.4 7 1.4ZM7 11.55C3.91986 11.55 1.05 8.02919 1.05 7.00018C1.05 5.97116 3.91986 2.45 7 2.45C10.0801 2.45 12.95 5.97116 12.95 7.00018C12.95 8.02919 10.0801 11.55 7 11.55Z"
          fill="currentColor"
        />
        <path
          d="M7.00033 4.55C6.2577 4.55 5.77546 4.72484 5.25033 5.24997C4.7252 5.7751 4.54999 6.25734 4.54999 6.99997C4.54999 7.7 4.89999 8.4 5.24999 8.74997C5.6758 9.17574 6.29999 9.45 6.99999 9.44997C7.66758 9.44994 8.33249 9.16747 8.74999 8.74997C9.16749 8.33247 9.44999 7.7 9.44999 6.99997C9.44999 6.34645 9.09999 5.6 8.74999 5.25C8.39999 4.9 7.69999 4.55 7.00033 4.55ZM7.00033 8.40006C6.62907 8.40006 6.27294 8.25252 6.01031 7.99001C5.74781 7.72739 5.60027 7.37125 5.60027 7C5.60027 6.62874 5.74781 6.27261 6.01031 6.00998C6.27293 5.74748 6.62907 5.59994 7.00033 5.59994C7.37158 5.59994 7.72772 5.74748 7.99034 6.00998C8.25285 6.27261 8.40039 6.62874 8.40039 7C8.40039 7.37125 8.25285 7.72739 7.99034 7.99001C7.72772 8.25252 7.37158 8.40006 7.00033 8.40006Z"
          fill="currentColor"
        />
      </svg>
    );
}

export default PreviewIcon;