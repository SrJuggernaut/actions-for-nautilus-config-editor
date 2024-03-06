import { type FC, type SVGProps } from 'react'

const Nautilus: FC<SVGProps<SVGSVGElement>> = ({ width = 128, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox='0 0 128 128'
    width={width}
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: '#000',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#000',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient id="b">
        <stop
          offset={0}
          style={{
            stopColor: '#eee',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#b2b2b2',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#c"
        id="w"
        x1={35}
        x2={39.488}
        y1={35}
        y2={36.659}
        gradientTransform="matrix(-.375 0 0 .375 137 955.362)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="c">
        <stop
          offset={0}
          style={{
            stopColor: '#000',
            stopOpacity: 1
          }}
        />
        <stop
          offset={0.5}
          style={{
            stopColor: '#000',
            stopOpacity: 0.25862068
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#000',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#c"
        id="x"
        x1={35}
        x2={39.488}
        y1={35}
        y2={36.659}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#d"
        id="y"
        x1={102}
        x2={102}
        y1={995.362}
        y2={1030.362}
        gradientTransform="translate(0 -24)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="d">
        <stop
          offset={0}
          style={{
            stopColor: '#b3b3b3',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#737373',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#e"
        id="z"
        x1={39}
        x2={39}
        y1={75}
        y2={54}
        gradientTransform="matrix(.375 0 0 .375 107.375 955.362)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="e">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#e"
        id="A"
        x1={39}
        x2={39}
        y1={75}
        y2={54}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#f"
        id="B"
        x1={99.308}
        x2={99.308}
        y1={975.362}
        y2={976.362}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="f">
        <stop
          offset={0}
          style={{
            stopColor: '#4e1c04',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#321203',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#g"
        id="C"
        x1={99.645}
        x2={99.645}
        y1={976.362}
        y2={977.862}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="g">
        <stop
          offset={0}
          style={{
            stopColor: '#8c3308',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#642406',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#h"
        id="D"
        x1={90}
        x2={90}
        y1={1002.862}
        y2={1004.362}
        gradientTransform="translate(0 1.5)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="h">
        <stop
          offset={0}
          style={{
            stopColor: '#e79e2d',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#bd701a',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#i"
        id="F"
        x1={86}
        x2={126}
        y1={71.5}
        y2={71.5}
        gradientTransform="matrix(.2625 0 0 .375 -122.075 979.237)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      />
      <linearGradient id="i">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#j"
        id="G"
        x1={90}
        x2={90}
        y1={1002.415}
        y2={1005.362}
        gradientTransform="translate(0 .75)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="j">
        <stop
          offset={0}
          style={{
            stopColor: '#f0c077',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#df841e',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#k"
        id="H"
        x1={90.125}
        x2={90.125}
        y1={1005.862}
        y2={1004.612}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="k">
        <stop
          offset={0}
          style={{
            stopColor: '#000',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#000',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#l"
        id="I"
        x1={94.234}
        x2={94.234}
        y1={461.75}
        y2={467.75}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#e"
        id="J"
        x1={86}
        x2={126}
        y1={71.5}
        y2={71.5}
        gradientTransform="matrix(.2625 0 0 .375 76.925 979.612)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#m"
        id="O"
        x1={95}
        x2={95}
        y1={1009.362}
        y2={1007.862}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="m">
        <stop
          offset={0}
          style={{
            stopColor: '#d2d2d2',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#e2e2e2',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#c"
        id="P"
        x1={38.6}
        x2={42.252}
        y1={77.854}
        y2={78.71}
        gradientTransform="matrix(.375 0 0 .375 71.246 979.362)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#c"
        id="Q"
        x1={38.6}
        x2={42.252}
        y1={77.854}
        y2={78.71}
        gradientTransform="matrix(-.375 0 0 .375 137.504 979.362)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#n"
        id="R"
        x1={95}
        x2={105}
        y1={1010.362}
        y2={1035.362}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="n">
        <stop
          offset={0}
          style={{
            stopColor: '#bfbfbf',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#8e8e8e',
            stopOpacity: 1
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#e"
        id="S"
        x1={89.381}
        x2={89.381}
        y1={468.545}
        y2={490.596}
        gradientTransform="translate(.5 540.362)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#e"
        id="T"
        x1={104.75}
        x2={129.308}
        y1={1033.228}
        y2={1033.228}
        gradientTransform="translate(104 -964.362)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      />
      <linearGradient id="o">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#p"
        id="W"
        x1={103}
        x2={103}
        y1={1025.862}
        y2={1016.937}
        gradientTransform="translate(0 -24)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#q"
        id="X"
        x1={105.5}
        x2={105.5}
        y1={1024.737}
        y2={1019.112}
        gradientTransform="matrix(2.66667 0 0 2.66667 -189.333 -2611.632)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="q">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#k"
        id="Z"
        x1={103.701}
        x2={103.701}
        y1={1018.316}
        y2={1028.026}
        gradientTransform="translate(0 -24)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#r"
        id="aa"
        x1={104}
        x2={104}
        y1={479}
        y2={484}
        gradientTransform="matrix(1 0 0 .8 0 611.787)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="r"
        x1={62.989}
        x2={62.989}
        y1={13.183}
        y2={16.19}
        gradientTransform="matrix(.64168 0 0 .6402 137.448 1016.414)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: '#f9f9f9'
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#c9c9c9'
          }}
        />
      </linearGradient>
      <linearGradient id="s">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient id="t">
        <stop
          offset={0}
          style={{
            stopColor: '#fff',
            stopOpacity: 1
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#fff',
            stopOpacity: 0
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#q"
        id="ad"
        x1={103}
        x2={103}
        y1={1025.862}
        y2={1021.403}
        gradientTransform="matrix(1 0 0 -1 0 2018.724)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#a"
        id="u"
        cx={88}
        cy={136}
        r={56}
        fx={88}
        fy={136}
        gradientTransform="matrix(1 0 0 .14286 0 116.571)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#b"
        id="v"
        cx={94}
        cy={432.5}
        r={21}
        fx={94}
        fy={432.5}
        gradientTransform="matrix(1.66667 0 0 .5816 -62.667 714.317)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="l"
        cx={63.969}
        cy={14.113}
        r={23.097}
        gradientTransform="matrix(1.008 0 0 .65396 114.593 1019.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: '#f0c178'
          }}
        />
        <stop
          offset={0.5}
          style={{
            stopColor: '#e18941'
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#ec4f18'
          }}
        />
      </radialGradient>
      <radialGradient
        xlinkHref="#o"
        id="U"
        cx={203.5}
        cy={30.5}
        r={11.5}
        fx={203.5}
        fy={30.5}
        gradientTransform="matrix(1 0 0 .13043 0 26.522)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="p"
        cx={3}
        cy={5.017}
        r={21}
        gradientTransform="matrix(0 1.0975 -1.3856 0 178.355 1018.243)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: '#bdbdbd'
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#d0d0d0'
          }}
        />
      </radialGradient>
      <radialGradient
        xlinkHref="#s"
        id="ab"
        cx={203.5}
        cy={30.5}
        r={11.5}
        fx={203.5}
        fy={30.5}
        gradientTransform="matrix(1 0 0 .13043 0 26.522)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#t"
        id="ac"
        cx={88}
        cy={109}
        r={9}
        fx={88}
        fy={109}
        gradientTransform="matrix(1 0 0 .22222 0 84.778)"
        gradientUnits="userSpaceOnUse"
      />
      <filter
        id="E"
        width={1.027}
        height={1.204}
        x={-0.014}
        y={-0.102}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={0.191} />
      </filter>
      <filter
        id="K"
        width={1.112}
        height={1.786}
        x={-0.056}
        y={-0.393}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={2.622} />
      </filter>
      <filter
        id="L"
        width={1.112}
        height={1.786}
        x={-0.056}
        y={-0.393}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={2.621} />
      </filter>
      <filter id="M" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation={1.7} />
      </filter>
      <filter id="V" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation={0.21} />
      </filter>
      <filter
        id="Y"
        width={1.216}
        height={1.432}
        x={-0.108}
        y={-0.216}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={0.337} />
      </filter>
      <clipPath id="N" clipPathUnits="userSpaceOnUse">
        <rect
          width={112}
          height={94}
          x={32}
          y={42}
          ry={2.667}
          style={{
            fill: '#f0f',
            fillOpacity: 1,
            stroke: 'none',
            display: 'inline'
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        display: 'inline'
      }}
      transform="matrix(2.66667 0 0 2.66667 -213.333 -2571.632)"
    >
      <path
        d="M144 136c0 4.418-25.072 8-56 8s-56-3.582-56-8 25.072-8 56-8 56 3.582 56 8z"
        style={{
          opacity: 0.4,
          color: '#000',
          fill: 'url(#u)',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible'
        }}
        transform="matrix(.42857 0 0 .75 66.286 904.362)"
      />
      <path
        d="M85.594 965.862c-.554 0-.794.494-1 1.018l-1 2.545S83 970.95 83 971.969c0 .564.446 1.032 1 1.018l20-.509 20 .509c.554.014 1-.454 1-1.018 0-1.018-.594-2.544-.594-2.544l-1-2.545c-.206-.524-.446-1.018-1-1.018H85.594z"
        style={{
          fill: 'url(#v)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M122.41 965.862c.554 0 .79.496.996 1.02l.996 2.543s.598 1.525.598 2.543c0 .563-.442 1.033-.996 1.02l-1.137-.024-2.367-7.102h1.91z"
        style={{
          opacity: 0.15,
          fill: 'url(#w)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M38.906 28c-1.477 0-2.107 1.323-2.656 2.719L33.594 37.5S32 41.567 32 44.281c0 1.504 1.18 2.757 2.656 2.719l3.032-.063L44 28h-5.094z"
        style={{
          opacity: 0.1,
          fill: 'url(#x)',
          fillOpacity: 1,
          stroke: 'none'
        }}
        transform="matrix(.375 0 0 .375 71 955.362)"
      />
      <rect
        width={42}
        height={35.25}
        x={83}
        y={971.112}
        ry={1}
        style={{
          fill: 'url(#y)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M122 975.237h.375v10.125H122z"
        style={{
          opacity: 0.3,
          color: '#000',
          fill: 'url(#z)',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible'
        }}
      />
      <path
        d="M39 53h1v27h-1z"
        style={{
          opacity: 0.3,
          color: '#000',
          fill: 'url(#A)',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible'
        }}
        transform="matrix(.375 0 0 .375 71 955.362)"
      />
      <rect
        width={36}
        height={29.25}
        x={86}
        y={974.112}
        ry={1}
        style={{
          fill: '#1a1a1a',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <rect
        width={30}
        height={3.867}
        x={89}
        y={975.362}
        ry={1}
        style={{
          fill: 'url(#B)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <rect
        width={31.5}
        height={4}
        x={88.25}
        y={976.362}
        ry={1}
        style={{
          fill: 'url(#C)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <g transform="matrix(-1 0 0 1 208.75 -27.25)">
        <path
          d="M89.613 1004.362a.987.987 0 0 0-.988 1v3.5h32.25v-2.75c0-.554-.446-1-1-1H99.5l-.75-.75z"
          style={{
            opacity: 0.98000004,
            fill: 'url(#D)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <rect
          width={33}
          height={4.875}
          x={88.25}
          y={465.5}
          ry={1}
          style={{
            fill: '#c44d22',
            fillOpacity: 1,
            stroke: 'none'
          }}
          transform="translate(0 540.362)"
        />
        <path
          d="M120.638 1006.237c.553 0 .987.446.987 1v3.5h-33.75v-2.75c0-.554.446-1 1-1h21.875l.75-.75z"
          style={{
            opacity: 0.2,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            display: 'inline',
            filter: 'url(#E)'
          }}
        />
        <path
          d="M-110 1005.862h21v.375h-21z"
          style={{
            opacity: 0.1,
            color: '#000',
            fill: 'url(#F)',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 1,
            marker: 'none',
            visibility: 'visible',
            display: 'inline',
            overflow: 'visible'
          }}
          transform="scale(-1 1)"
        />
      </g>
      <g transform="translate(0 -24.25)">
        <path
          d="M88.113 1003.612a.987.987 0 0 0-.988 1v3.5h33.75v-2.75c0-.554-.446-1-1-1H98l-.75-.75z"
          style={{
            opacity: 0.98000004,
            fill: 'url(#G)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M88.625 1004.737h30.75v1.125h-30.75z"
          style={{
            opacity: 0.1,
            fill: 'url(#H)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <rect
          width={34.5}
          height={4.875}
          x={86.75}
          y={465.5}
          ry={1}
          style={{
            fill: 'url(#I)',
            fillOpacity: 1,
            stroke: 'none'
          }}
          transform="translate(0 540.362)"
        />
        <path
          d="M89 1005.112h30v.75H89z"
          style={{
            fill: '#f2f2f2',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M87.746 1005.862a.991.991 0 0 0-.996.996v.375c0-.554.442-.996.996-.996h32.508c.554 0 .996.442.996.996v-.375a.991.991 0 0 0-.996-.996z"
          style={{
            opacity: 0.1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <text
          xmlSpace="preserve"
          x={88.944}
          y={1004.57}
          style={{
            fontSize: '.80852455px',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 400,
            fontStretch: 'normal',
            textAlign: 'start',
            lineHeight: '125%',
            letterSpacing: 0,
            wordSpacing: 0,
            textAnchor: 'start',
            opacity: 0.5,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            fontFamily: 'Ubuntu'
          }}
        >
          <tspan x={88.944} y={1004.57}>
            {'Important files'}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={116.319}
          y={1002.32}
          style={{
            fontSize: '.80852455px',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 400,
            fontStretch: 'normal',
            textAlign: 'start',
            lineHeight: '125%',
            letterSpacing: 0,
            wordSpacing: 0,
            textAnchor: 'start',
            opacity: 0.5,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            fontFamily: 'Ubuntu'
          }}
        >
          <tspan x={116.319} y={1002.32}>
            {'Drafts'}
          </tspan>
        </text>
        <path
          d="M89 1006.237h21v.375H89z"
          style={{
            opacity: 0.2,
            color: '#000',
            fill: 'url(#J)',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 1,
            marker: 'none',
            visibility: 'visible',
            display: 'inline',
            overflow: 'visible'
          }}
        />
        <path
          d="M45.625 64C44.148 64 43 65.179 43 66.656v1C43 66.18 44.148 65 45.625 65L70 64z"
          style={{
            opacity: 0.2,
            fill: '#fff',
            fillOpacity: 1,
            stroke: 'none'
          }}
          transform="matrix(.375 0 0 .375 71 979.612)"
        />
      </g>
      <path
        d="M144 136c0 4.418-25.072 8-56 8s-56-3.582-56-8 25.072-8 56-8 56 3.582 56 8z"
        style={{
          opacity: 0.3,
          color: '#000',
          fill: '#000',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible',
          filter: 'url(#K)'
        }}
        transform="matrix(.375 0 0 .10496 71 992.088)"
      />
      <path
        d="M144 136c0 4.418-25.072 8-56 8s-56-3.582-56-8 25.072-8 56-8 56 3.582 56 8z"
        style={{
          opacity: 0.5,
          color: '#000',
          fill: '#000',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible',
          filter: 'url(#L)'
        }}
        transform="matrix(.33712 0 0 .10496 74.333 995.088)"
      />
      <g transform="translate(-.75 -24)">
        <path
          d="M39.688 76c-2.103 0-2 .99-2.75 2.906-.436 1.113-.784 1.692-.876 3.219 0 .021.002.04 0 .063-.027.154-.062.305-.062.468v58.688A2.643 2.643 0 0 0 38.656 144h96.688a2.643 2.643 0 0 0 2.656-2.656V82.656c0-.184-.027-.357-.063-.531-.096-1.296-.415-2.125-.843-3.219-.75-1.916-.648-2.906-2.75-2.906H39.687z"
          clipPath="url(#N)"
          style={{
            opacity: 0.6,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            filter: 'url(#M)'
          }}
          transform="matrix(.375 0 0 .375 71.75 979.362)"
        />
        <path
          d="M86.631 1007.862c-.788 0-.75.375-1.031 1.094-.183.467-.334.656-.344 1.406H123.501c-.007-.62-.16-.939-.344-1.406-.28-.719-.242-1.094-1.03-1.094H104z"
          style={{
            fill: 'url(#O)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M86.621 1007.862c-.788 0-.75.371-1.031 1.09-.183.467-.33.656-.34 1.406h1.418l.832-2.496h-.879z"
          style={{
            opacity: 0.1,
            fill: 'url(#P)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M122.129 1007.862c.788 0 .75.371 1.031 1.09.183.467.33.656.34 1.406h-1.418l-.832-2.496h.879z"
          style={{
            opacity: 0.15,
            fill: 'url(#Q)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <rect
          width={38.25}
          height={24}
          x={85.25}
          y={1009.362}
          ry={1}
          style={{
            fill: 'url(#R)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M86.25 1009.362c-.554 0-1 .446-1 1v22c0 .554.446 1 1 1h16.438l-9.5-24z"
          style={{
            opacity: 0.1,
            fill: 'url(#S)',
            fillOpacity: 1,
            stroke: 'none'
          }}
        />
        <path
          d="M189.125 67.637V68c0 .554.446 1 1 1h36.362c.554 0 1-.446 1-1v-.363c0 .554-.446 1-1 1h-36.362c-.554 0-1-.446-1-1z"
          style={{
            opacity: 0.25,
            fill: 'url(#T)',
            fillOpacity: 1,
            stroke: 'none'
          }}
          transform="translate(-104 964.362)"
        />
        <path
          d="M40 79c-1.043 0-1.208.603-1.644 1.469-.004.013-.027.018-.03.031-.166.532-.27 1.155-.282 2.156A2.643 2.643 0 0 1 40.7 80h96.642a2.643 2.643 0 0 1 2.656 2.656 7.32 7.32 0 0 0-.437-2.5A2.66 2.66 0 0 0 137.34 79z"
          style={{
            opacity: 0.3,
            fill: '#fff',
            fillOpacity: 1,
            stroke: 'none'
          }}
          transform="matrix(.375 0 0 .375 71 979.362)"
        />
        <path
          d="M215 30.5c0 .828-5.149 1.5-11.5 1.5s-11.5-.672-11.5-1.5 5.149-1.5 11.5-1.5 11.5.672 11.5 1.5z"
          style={{
            opacity: 0.6,
            color: '#000',
            fill: 'url(#U)',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 1,
            marker: 'none',
            visibility: 'visible',
            display: 'inline',
            overflow: 'visible'
          }}
          transform="matrix(1 0 0 .375 -95 997.737)"
        />
      </g>
      <rect
        width={12}
        height={9}
        x={98}
        y={992.937}
        ry={2.25}
        style={{
          opacity: 0.4,
          fill: '#000',
          fillOpacity: 1,
          stroke: 'none',
          filter: 'url(#V)'
        }}
      />
      <rect
        width={12}
        height={9}
        x={98}
        y={992.862}
        ry={2.25}
        style={{
          fill: 'url(#W)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M78.656 103.031A3.656 3.656 0 0 0 75 106.687v10.688a3.656 3.656 0 0 0 3.656 3.656h18.688a3.656 3.656 0 0 0 3.656-3.656v-10.688a3.656 3.656 0 0 0-3.656-3.656H78.656zm0 .969h18.688a2.643 2.643 0 0 1 2.656 2.656v10.688A2.643 2.643 0 0 1 97.344 120H78.656A2.643 2.643 0 0 1 76 117.344v-10.688A2.643 2.643 0 0 1 78.656 104z"
        style={{
          opacity: 0.3,
          fill: 'url(#X)',
          fillOpacity: 1,
          stroke: 'none'
        }}
        transform="matrix(.375 0 0 .375 71 955.362)"
      />
      <rect
        width={7.5}
        height={3.75}
        x={100.25}
        y={995.487}
        rx={0.5}
        style={{
          fill: '#000',
          fillOpacity: 1,
          stroke: 'none',
          filter: 'url(#Y)'
        }}
      />
      <rect
        width={9}
        height={6}
        x={99.5}
        y={994.362}
        ry={1}
        style={{
          opacity: 0.5,
          fill: 'url(#Z)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <rect
        width={7.5}
        height={3.75}
        x={100.25}
        y={995.112}
        rx={0.5}
        style={{
          fill: 'url(#aa)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M80 272h48v48H80z"
        style={{
          opacity: 0.2,
          fill: 'none',
          stroke: 'none'
        }}
        transform="translate(0 692.362)"
      />
      <path
        d="M34.656 41a2.63 2.63 0 0 0-2.562 2.031c-.008.033-.025.061-.032.094-.003.03.004.064 0 .094A9.134 9.134 0 0 0 32 44.28c0 .063.027.126.031.188C32.13 43.084 33.244 42 34.656 42h106.688c1.412 0 2.526 1.084 2.625 2.469.004-.062.031-.125.031-.188 0-.339-.02-.691-.063-1.062-.004-.03.004-.064 0-.094-.007-.033-.023-.061-.03-.094A2.63 2.63 0 0 0 141.343 41H34.656z"
        style={{
          opacity: 0.3,
          fill: '#fff',
          fillOpacity: 1,
          stroke: 'none'
        }}
        transform="matrix(.375 0 0 .375 71 955.362)"
      />
      <path
        d="M215 30.5c0 .828-5.149 1.5-11.5 1.5s-11.5-.672-11.5-1.5 5.149-1.5 11.5-1.5 11.5.672 11.5 1.5z"
        style={{
          opacity: 0.6,
          color: '#000',
          fill: 'url(#ab)',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible'
        }}
        transform="matrix(.99457 0 0 .375 -91.832 959.487)"
      />
      <path
        d="M97 109c0 1.105-4.03 2-9 2s-9-.895-9-2 4.03-2 9-2 9 .895 9 2z"
        style={{
          opacity: 0.6,
          color: '#000',
          fill: 'url(#ac)',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 1,
          marker: 'none',
          visibility: 'visible',
          display: 'inline',
          overflow: 'visible'
        }}
        transform="matrix(.41667 0 0 .5625 67.333 934.925)"
      />
      <path
        d="M100.25 1001.862a2.245 2.245 0 0 1-2.25-2.25v-4.5a2.245 2.245 0 0 1 2.25-2.25h7.5a2.245 2.245 0 0 1 2.25 2.25v4.5a2.245 2.245 0 0 1-2.25 2.25h-7.5zm0-.386h7.5a1.859 1.859 0 0 0 1.875-1.876v-4.5a1.859 1.859 0 0 0-1.875-1.875h-7.5a1.859 1.859 0 0 0-1.875 1.875v4.5c0 1.049.827 1.876 1.875 1.876z"
        style={{
          opacity: 0.4,
          fill: 'url(#ad)',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
      <path
        d="M98 999.612v.375a2.245 2.245 0 0 0 2.25 2.25h7.5a2.245 2.245 0 0 0 2.25-2.25v-.375a2.245 2.245 0 0 1-2.25 2.25h-7.5a2.245 2.245 0 0 1-2.25-2.25z"
        style={{
          opacity: 0.1,
          fill: '#000',
          fillOpacity: 1,
          stroke: 'none'
        }}
      />
    </g>
  </svg>
)
export default Nautilus
