export default function Webring({ domain, className }) {
  return (
    <a
      href={`https://webring.wonderful.software#${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      title="วงแหวนเว็บ"
      aria-label="วงแหวนเว็บ"
      className={className}
    >
      <svg viewBox="0 0 416 416" fill="currentColor" aria-hidden="true" className="h-full w-full">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z"
        />
        <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" />
      </svg>
    </a>
  );
}
