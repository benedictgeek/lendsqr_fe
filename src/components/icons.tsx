export const SearchIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
        fill="white"
      />
    </svg>
  );
};

export const BellIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="path-1-outside-1_38132_17"
        maskUnits="userSpaceOnUse"
        x="0.162598"
        y="-0.26667"
        width="22"
        height="25"
        fill="black"
      >
        <rect fill="white" x="0.162598" y="-0.26667" width="22" height="25" />
        <path d="M17.5001 12.5968V10.663C17.5174 9.17108 17.0299 7.71776 16.1168 6.53762C15.2038 5.35746 13.919 4.52059 12.4708 4.16309C13.0304 3.57404 13.1848 2.70871 12.8649 1.96326C12.5439 1.21677 11.8107 0.73333 10.9982 0.73333C10.1857 0.73333 9.45239 1.21677 9.13145 1.96326C8.81152 2.70873 8.9659 3.57404 9.5255 4.16309C8.09652 4.49621 6.82202 5.30262 5.90994 6.45232C4.9969 7.601 4.50025 9.02489 4.50025 10.4925V12.5968C4.50736 15.5107 3.34954 18.3057 1.28275 20.3602C1.16595 20.476 1.1304 20.6517 1.19337 20.804C1.25736 20.9563 1.40564 21.0559 1.57118 21.0549H8.18896C8.40123 22.4442 9.59561 23.47 11.0001 23.47C12.4045 23.47 13.5991 22.4442 13.8112 21.0549H20.429C20.5945 21.0559 20.7428 20.9563 20.8068 20.804C20.8698 20.6517 20.8342 20.476 20.7174 20.3602C18.6506 18.3056 17.4929 15.5107 17.4999 12.5968L17.5001 12.5968ZM11.0001 1.55485C11.4927 1.55485 11.9375 1.85141 12.1264 2.30742C12.3143 2.76242 12.2107 3.28648 11.8624 3.63587C11.513 3.98421 10.9889 4.08782 10.5339 3.89992C10.0779 3.71102 9.78134 3.26617 9.78134 2.7736C9.78134 2.10025 10.3267 1.55485 11.0001 1.55485ZM11.0001 22.6799C10.0342 22.6799 9.20243 22.0004 9.00948 21.0549H12.9906C12.7976 22.0004 11.9658 22.6799 11 22.6799H11.0001ZM2.50121 20.2424C4.32324 18.1126 5.32169 15.3999 5.31233 12.5968V10.4924C5.3103 8.93443 5.9471 7.44442 7.07443 6.3701C8.20176 5.29456 9.72019 4.72987 11.276 4.80503C12.7588 4.89644 14.1493 5.5576 15.1568 6.64838C16.1653 7.74017 16.7127 9.1773 16.6873 10.663V12.5968C16.6782 15.3999 17.6766 18.1127 19.4985 20.2424H2.50121Z" />
      </mask>
      <path
        d="M17.5001 12.5968V10.663C17.5174 9.17108 17.0299 7.71776 16.1168 6.53762C15.2038 5.35746 13.919 4.52059 12.4708 4.16309C13.0304 3.57404 13.1848 2.70871 12.8649 1.96326C12.5439 1.21677 11.8107 0.73333 10.9982 0.73333C10.1857 0.73333 9.45239 1.21677 9.13145 1.96326C8.81152 2.70873 8.9659 3.57404 9.5255 4.16309C8.09652 4.49621 6.82202 5.30262 5.90994 6.45232C4.9969 7.601 4.50025 9.02489 4.50025 10.4925V12.5968C4.50736 15.5107 3.34954 18.3057 1.28275 20.3602C1.16595 20.476 1.1304 20.6517 1.19337 20.804C1.25736 20.9563 1.40564 21.0559 1.57118 21.0549H8.18896C8.40123 22.4442 9.59561 23.47 11.0001 23.47C12.4045 23.47 13.5991 22.4442 13.8112 21.0549H20.429C20.5945 21.0559 20.7428 20.9563 20.8068 20.804C20.8698 20.6517 20.8342 20.476 20.7174 20.3602C18.6506 18.3056 17.4929 15.5107 17.4999 12.5968L17.5001 12.5968ZM11.0001 1.55485C11.4927 1.55485 11.9375 1.85141 12.1264 2.30742C12.3143 2.76242 12.2107 3.28648 11.8624 3.63587C11.513 3.98421 10.9889 4.08782 10.5339 3.89992C10.0779 3.71102 9.78134 3.26617 9.78134 2.7736C9.78134 2.10025 10.3267 1.55485 11.0001 1.55485ZM11.0001 22.6799C10.0342 22.6799 9.20243 22.0004 9.00948 21.0549H12.9906C12.7976 22.0004 11.9658 22.6799 11 22.6799H11.0001ZM2.50121 20.2424C4.32324 18.1126 5.32169 15.3999 5.31233 12.5968V10.4924C5.3103 8.93443 5.9471 7.44442 7.07443 6.3701C8.20176 5.29456 9.72019 4.72987 11.276 4.80503C12.7588 4.89644 14.1493 5.5576 15.1568 6.64838C16.1653 7.74017 16.7127 9.1773 16.6873 10.663V12.5968C16.6782 15.3999 17.6766 18.1127 19.4985 20.2424H2.50121Z"
        fill="#213F7D"
      />
      <path
        d="M17.5001 12.5968V10.663C17.5174 9.17108 17.0299 7.71776 16.1168 6.53762C15.2038 5.35746 13.919 4.52059 12.4708 4.16309C13.0304 3.57404 13.1848 2.70871 12.8649 1.96326C12.5439 1.21677 11.8107 0.73333 10.9982 0.73333C10.1857 0.73333 9.45239 1.21677 9.13145 1.96326C8.81152 2.70873 8.9659 3.57404 9.5255 4.16309C8.09652 4.49621 6.82202 5.30262 5.90994 6.45232C4.9969 7.601 4.50025 9.02489 4.50025 10.4925V12.5968C4.50736 15.5107 3.34954 18.3057 1.28275 20.3602C1.16595 20.476 1.1304 20.6517 1.19337 20.804C1.25736 20.9563 1.40564 21.0559 1.57118 21.0549H8.18896C8.40123 22.4442 9.59561 23.47 11.0001 23.47C12.4045 23.47 13.5991 22.4442 13.8112 21.0549H20.429C20.5945 21.0559 20.7428 20.9563 20.8068 20.804C20.8698 20.6517 20.8342 20.476 20.7174 20.3602C18.6506 18.3056 17.4929 15.5107 17.4999 12.5968L17.5001 12.5968ZM11.0001 1.55485C11.4927 1.55485 11.9375 1.85141 12.1264 2.30742C12.3143 2.76242 12.2107 3.28648 11.8624 3.63587C11.513 3.98421 10.9889 4.08782 10.5339 3.89992C10.0779 3.71102 9.78134 3.26617 9.78134 2.7736C9.78134 2.10025 10.3267 1.55485 11.0001 1.55485ZM11.0001 22.6799C10.0342 22.6799 9.20243 22.0004 9.00948 21.0549H12.9906C12.7976 22.0004 11.9658 22.6799 11 22.6799H11.0001ZM2.50121 20.2424C4.32324 18.1126 5.32169 15.3999 5.31233 12.5968V10.4924C5.3103 8.93443 5.9471 7.44442 7.07443 6.3701C8.20176 5.29456 9.72019 4.72987 11.276 4.80503C12.7588 4.89644 14.1493 5.5576 15.1568 6.64838C16.1653 7.74017 16.7127 9.1773 16.6873 10.663V12.5968C16.6782 15.3999 17.6766 18.1127 19.4985 20.2424H2.50121Z"
        stroke="#213F7D"
        stroke-width="0.8"
        mask="url(#path-1-outside-1_38132_17)"
      />
    </svg>
  );
};

export const DropDownIcon = () => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z"
        fill="#213F7D"
      />
    </svg>
  );
};
