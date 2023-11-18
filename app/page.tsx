import { config } from "@/data/config";
// import Image from '@/components/Image';
import Image from "next/image";
import NowPlaying from "@/components/NowPlaying";
import DiscordTag from "@/components/DiscordTag";
import AllBadges from "@/components/AllBadges";
import Link from "next/link";

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
                          {config.bio} at <Link href="https://www.doubler.id/">Doubler Studio</Link>
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
                          href={config.socials.linkedin}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            className="h-6 fill-current transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                          >
                            <g fill="none">
                              <rect
                                width="256"
                                height="256"
                                fill="#fff"
                                rx="60"
                              />
                              <rect
                                width="256"
                                height="256"
                                fill="#0A66C2"
                                rx="60"
                              />
                              <path
                                fill="#fff"
                                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                              />
                            </g>
                          </svg>
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
                                        {config.portfolio.replace(
                                          "https://",
                                          ""
                                        )}
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
          </div>
        </div>
        <div />
      </div>
    </main>
  );
}
