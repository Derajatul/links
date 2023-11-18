import { config } from '@/data/config'
// import Image from '@/components/Image';
import Image from 'next/image'
import NowPlaying from '@/components/NowPlaying';
import DiscordTag from '@/components/DiscordTag';
import AllBadges from '@/components/AllBadges';

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex flex-col">
          <div className="bg-primary flex min-h-screen flex-col">
            <div
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              className="bg-banner h-60 w-full"
            />
            <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
              <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
                <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                  <div className="relative">
                    <Image
                      className="bg-primary border-primary h-28 w-28 rounded-full border-4 border-solid object-cover"
                      src={config.avatar}
                      alt="pfp"
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="relative flex flex-row items-center justify-center">
                    <div className="mb-1 flex flex-col">
                      <div className="mt-1 flex flex-row items-center justify-center">
                        <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                          {config.name}
                        </span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="ml-1 h-5 w-5 text-indigo-600"
                          >
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                        <a
                          // rel="noopener noreferrer nofollow"
                          // target="_blank"
                          href=""
                        >
                          {config.belowLink}
                        </a>
                      </p>
                      <div className="mt-3 flex flex-col">
                        <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                          {config.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <AllBadges />
                  </div>
                  <div className="mt-1 rounded pt-2">
                    <div>
                      <div className="flex flex-row flex-wrap  items-center justify-center">
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.twitter}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current text-white transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" /></svg>

                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.linkedin}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256">
                            <g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0A66C2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" /></g></svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.github}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="text-primary h-6 fill-current transition-all dark:text-gray-200"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.lichess}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="h-7 w-7"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 1024 1024"
                          >
                            <title>Lichess</title>
                            <circle cx="512" cy="512" r="512" fill="black" />
                            <path
                              d="M766.7 551.8v-.1l-124.6-226 16.2-69.5c0-.2 0-.3-.1-.4-.1-.1-.3-.2-.4-.2-36.9 4.4-67.5 9.4-97.1 31.2-55.6-3.9-105.2 1.5-147.4 15.9-37.6 12.8-69.4 32.9-94.6 59.6-25.2 26.7-43.3 59.2-53.7 96.5-9 32.4-11.6 66.7-7.5 99.1 7.1 52.4 30.5 99.3 67.8 135.7 33.9 33.1 77.5 56.5 126.3 67.8 20.8 4.8 41.6 7.2 62 7.2 23.8 0 47-3.3 68.9-9.8 43-12.8 77.8-37.7 100.7-71.8.1-.2.1-.5-.1-.7-.2-.2-.5-.1-.7 0-75.8 78.4-200 91.9-295.3 32.1-99.7-62.5-137.8-187.1-86.8-283.7 50.8-96.1 140.9-137.4 253.9-116.4.1 0 .2 0 .3-.1 2.4-1.4 4.8-2.8 7.3-4.3 23-13.6 49.1-28.9 71.8-29L616.1 335v.4l133.2 223.2c-2.4 30.2-17.6 45.8-30 53.5-12.2 7.6-24 9.4-26.2 9.7-5.7-14.5-16-29.5-50.6-62.9-8.9-8.6-25.9-20.1-45.6-33.4-55.7-37.7-132.1-89.4-119.3-135.4.1-.3-.1-.5-.3-.6-.3-.1-.5.1-.6.3-7.3 25.5 2.6 53.2 30.2 84.9 23.5 26.9 55.7 51.8 81.6 71.8 14.3 11 26.7 20.6 35 28.4 37.1 34.9 55.8 61.3 60.5 70.5.1.2.3.3.6.3.2-.1 24.9-6.7 47.2-21.5 29.4-19.8 41.6-44.8 34.9-72.4z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.spotify}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="h-6 fill-current text-green-400"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Spotify</title>
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.lastfm}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="h-6 w-6"
                            viewBox="0 0 230 115"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M 100.831 113.498 l -8.354 -22.708 c 0 0 -13.575 15.14 -33.932 15.14 c -18.013 0 -30.802 -15.662 -30.802 -40.721 c 0 -32.106 16.182 -43.591 32.107 -43.591 c 22.969 0 30.277 14.878 36.543 33.934 l 8.354 26.103 c 8.351 25.318 24.013 45.678 69.17 45.678 c 32.37 0 54.295 -9.918 54.295 -36.02 c 0 -21.143 -12.009 -32.107 -34.458 -37.328 l -16.705 -3.654 c -11.484 -2.61 -14.877 -7.309 -14.877 -15.14 c 0 -8.875 7.046 -14.096 18.533 -14.096 c 12.529 0 19.315 4.699 20.36 15.923 l 26.102 -3.133 c -2.088 -23.492 -18.271 -33.15 -44.896 -33.15 c -23.491 0 -46.462 8.875 -46.462 37.327 c 0 17.75 8.614 28.975 30.277 34.195 l 17.752 4.175 c 13.312 3.133 17.748 8.614 17.748 16.185 c 0 9.656 -9.396 13.572 -27.146 13.572 c -26.364 0 -37.325 -13.834 -43.591 -32.89 l -8.614 -26.101 c -10.961 -33.934 -28.452 -46.463 -63.169 -46.463 c -38.37 0 -58.731 24.275 -58.731 65.517 c 0 39.677 20.361 61.08 56.906 61.08 C 86.733 127.332 100.831 113.498 100.831 113.498 L 100.831 113.498 z"
                              id="path5"
                              fill="#d51007"
                              fillOpacity={1}
                            />
                            <title>Last FM</title>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.telegram}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="h-7 w-7"
                            xmlns="http://www.w3.org/2000/svg"
                            height="800"
                            width="1200"
                            viewBox="-36 -60 312 360"
                          >
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                y2="51.9"
                                y1="11.536"
                                x2="28.836"
                                x1="46.136"
                                id="a"
                              >
                                <stop offset="0" stopColor="#37aee2" />
                                <stop offset="1" stopColor="#1e96c8" />
                              </linearGradient>
                            </defs>
                            <g transform="scale(3.4682)">
                              <circle
                                fill="url(#a)"
                                r="34.6"
                                cx="34.6"
                                cy="34.6"
                              />
                              <path
                                fill="#fff"
                                d="M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7c-1.7.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1c-3-.9-6.5-2.1-6.5-2.1s-2.4-1.5 1.7-3.1z"
                              />
                            </g>
                            <title>Telegram</title>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.BuyMeACoffee}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            width="884"
                            height="1279"
                            viewBox="0 0 884 1279"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                          >
                            <path
                              d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518V297.518Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M803.896 388.891L802.916 389.166L803.896 388.891Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377V297.377Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M791.113 297.529H791.244V297.447L791.113 297.529Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726V388.726Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515V299.515Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z"
                              fill="#FFDD00"
                            />
                            <path
                              d="M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132V386.132Z"
                              fill="#0D0C22"
                            />
                            <path
                              d="M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2302 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.731 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.905 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z"
                              fill="#ececed"
                            />
                            <title>Buy Me a Coffee</title>
                          </svg>
                        </a>

                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.mail}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                            <title>Email</title>
                          </svg>
                        </a>
                        <DiscordTag discordTag={config.socials.discordTag} />
                        <div className="max-w-s mt-1 w-full space-y-2">
                          <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                            <a
                              href={config.portfolio}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="w-full transition-all sm:hover:opacity-70"
                            >
                              <div>
                                <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                  <div className="flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                      <span className=""> 🌊 </span>
                                    </div>
                                    <div className="mx-4 flex flex-col">
                                      <span
                                        title="My Portfolio"
                                        className="text-ellipsis text-[16px] text-zinc-400"
                                      >
                                        My Portfolio
                                      </span>
                                      <span
                                        title="https://arunava.tech"
                                        className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                      >
                                        {config.portfolio.replace("https://", "")}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="absolute right-2 text-zinc-600 transition-all">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      className="h-4 w-8"
                                    >
                                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 flex justify-center">
                        <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-primary text-gray-200 flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium">
                <NowPlaying />
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </main>
  )
}
