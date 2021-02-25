import React from 'react';

const ChevronRightWithPurpleAngle = () => (
  <svg width={50} height={50} viewBox="0 0 50 50" fill="none">
    <path className="angle-background" d="M.346 50H50V25 0H15.459L.346 50z" fill="#BB6BD9"/>
    <path d="M24.344 17.688L31.656 25l-7.312 7.313" className="arrow" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronUp = () => (
  <svg width={36} height={20} viewBox="0 0 36 20" fill="none">
    <path d="M.983 18.297L17.858 1.422l16.875 16.875" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDown = () => (
  <svg viewBox="0 0 22 12" fill="none">
    <path d="M21.125.938L11 11.062.875.938" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronLeftCarousel = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="#712CE2" />
    <path d="M35.7031 45.9609L18.1365 29.0001L35.7031 12.0392" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRightCarousel = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="#712CE2" />
    <path d="M22.2969 11.0391L39.8635 27.9999L22.2969 44.9608" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRightLink = (props) => (
  <svg width="30" height="30" viewBox="0 0 30 31" fill="none">
    <circle cx="15" cy="15" r="15" fill="#8E2DBA" />
    <path d="M12.344 8.57l7.312 7.313-7.312 7.312" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const HamburgerMenu = () => (
  <svg viewBox="0 0 30 27" fill="none">
    <g clipPath="url(#prefix__clip0)" stroke="currentColor" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round">
      <path d="M3 24h25.104M3 14h25.104M3 3h25.104" />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="currentColor" d="M0 0h30v27H0z" />
      </clipPath>
    </defs>
  </svg>
)

const RadioButtonSvg = () => (
  <svg width={30} height={31} viewBox="0 0 30 31" fill="none">
    <circle cx={15} cy={15.759} r={13.5} stroke="currentColor" strokeWidth={3} />
  </svg>
)

const QuestionnaireSummaryCircle = () => (
  <svg width={53} height={51} viewBox="0 0 53 51" fill="none">
    <circle cx={25.789} cy={25.32} r={25} fill="#8e2dba" />
    <path d="M50.144 10.58A4.5 4.5 0 1043.39 4.63L25.456 24.997 22.33 21.01a4.5 4.5 0 00-7.084 5.552l6.465 8.249a4.5 4.5 0 006.92.198l21.512-24.43z" fill="#8e2dba" stroke="#FCF0FF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Clipboard = () => (
  <svg width={44} height={44} viewBox="0 0 44 44" fill="none">
    <path d="M29.568 7.353h3.608a3.608 3.608 0 013.608 3.608v25.256a3.608 3.608 0 01-3.608 3.608H11.528a3.608 3.608 0 01-3.608-3.608V10.961a3.608 3.608 0 013.608-3.608h3.608" stroke="currentColor" strokeWidth={3.608} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27.763 3.745H16.939c-.996 0-1.804.808-1.804 1.804v3.608c0 .997.808 1.804 1.804 1.804h10.824c.996 0 1.804-.807 1.804-1.804V5.55c0-.996-.808-1.804-1.804-1.804z" stroke="currentColor" strokeWidth={3.608} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Printer = () => (
  <svg viewBox="0 0 34 34" fill="none">
    <path d="M8 12.5V2h18v10.5" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 25.999H5a3 3 0 01-3-3v-7.5a3 3 0 013-3h24a3 3 0 013 3v7.5a3 3 0 01-3 3h-3" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 20H8v12h18V20z" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRight = () => (
  <svg width={9} height={17} viewBox="0 0 9 17" fill="none">
    <path d="M0 1.271l7.313 7.313L0 15.897" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PurpleAngleLeft = () => (
  <svg viewBox="0 0 78 112">
    <path d="M0 .047h78l-33.568 112H0z" fill="#BB6BD9" fillRule="nonzero" />
  </svg>
)

const ChevronRightCircleBackground = ({ backgroundColor = '#8E2DBA' }) => (
  <svg viewBox="0 0 30 31" fill="none">
    <circle cx="15" cy="15.883" r="15" fill={backgroundColor} />
    <path d="M12.344 8.57l7.312 7.313-7.312 7.312" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronRightWithPurpleAngle,
  ChevronRightCircleBackground,
  RadioButtonSvg,
  PurpleAngleLeft,
  HamburgerMenu,
  QuestionnaireSummaryCircle,
  Clipboard,
  Printer,
  ChevronLeftCarousel,
  ChevronRightCarousel,
  ChevronRightLink
}
