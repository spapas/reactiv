import React from "react";

import {templates} from "reactivated";
import {Helmet} from "react-helmet-async";

import {css, cx} from "@linaria/core";
import {styled} from "@linaria/react";

import outdent from "outdent";

import {Layout} from "../components/Layout";
import * as forms from "../forms";
import * as styles from "../styles";

const Highlight = styled.div`
    ${styles.style({
        display: "flex",
        gap: 15,

        paddingLeft: 50,
        paddingRight: 50,

        $mobile: {
            flexDirection: "column",
            paddingLeft: 0,
            paddingRight: 0,
        },

        $nest: {
            "& p": {
                fontSize: 17,
            },
            "& > *": {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 15,
                justifyContent: "center",
                textAlign: "center",
            },
        },
    })}
`;

const InstallationCommand = styled.pre`
    ${styles.style({
        margin: 0,
        padding: 15,
        fontSize: 14,
        fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        backgroundColor: styles.colors.darkBackground,
        inlineSize: "min-content",
        borderRadius: "10px",
        color: styles.colors.header,
        lineHeight: 1.5,

        overflow: "hidden",
        maxWidth: "100%",
        textOverflow: "ellipsis",
    })}
`;

const Links = styled.ul`
    ${styles.style({
        display: "flex",
        flexDirection: "column",
        gap: 5,
    })}
`;

const Site = (props: {title: string; className: string; children: React.ReactNode}) => (
    <Layout title={props.title}>
        <div
            className={cx(
                css`
                    ${styles.style({})}
                `,
                props.className,
            )}
        >
            <main
                className={cx(
                    css`
                        ${styles.style({
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            gap: 30,
                        })}
                    `,
                    props.className,
                )}
            >
                {props.children}
            </main>
            <footer
                className={css`
                    ${styles.style({
                        textAlign: "center",
                        fontSize: 15,
                        padding: 20,
                    })}
                `}
            >
                <p>
                    A{" "}
                    <a target="_blank" href="https://www.silv.io" rel="noreferrer">
                        Silvio Gutierrez
                    </a>{" "}
                    Initiative
                </p>
            </footer>
        </div>
    </Layout>
);

const Star = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        focusable="false"
        fill="currentColor"
        width={16}
        height={16}
    >
        <path d="M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.7-1.5-.7-1.8 0L8.2 7.3l-6.3 1c-.4 0-.7.3-.9.7-.1.4 0 .8.3 1l4.6 4.5-1.1 6.4c-.1.4.1.8.4 1 .2 0 .4.1.6.1.2 0 .3 0 .5-.1l5.7-3 5.7 3c.3.2.7.1 1.1-.1.3-.2.5-.6.4-1l-1.1-6.4 4.6-4.5c.3-.2.4-.6.3-.9zm-6.7 4.4c-.2.2-.3.6-.3.9l.8 4.9-4.4-2.3c-.3-.2-.6-.2-.9 0l-4.4 2.3.9-4.9c0-.3-.1-.7-.3-.9L4.1 10 9 9.3c.3 0 .6-.3.8-.5L12 4.3l2.2 4.4c.1.3.4.5.8.5l4.9.7-3.6 3.5z" />
    </svg>
);

const GitHub = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        focusable="false"
        fill="currentColor"
    >
        <path
            d="M12.006 2a10 10 0 00-3.16 19.489c.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341a2.648 2.648 0 00-1.11-1.463c-.908-.62.068-.608.068-.608a2.1 2.1 0 011.532 1.03 2.13 2.13 0 002.91.831 2.137 2.137 0 01.635-1.336c-2.22-.253-4.555-1.11-4.555-4.943a3.865 3.865 0 011.03-2.683 3.597 3.597 0 01.098-2.647s.84-.269 2.75 1.026a9.478 9.478 0 015.007 0c1.909-1.294 2.747-1.026 2.747-1.026a3.592 3.592 0 01.1 2.647 3.859 3.859 0 011.027 2.683c0 3.842-2.338 4.687-4.566 4.935a2.387 2.387 0 01.68 1.852c0 1.336-.013 2.415-.013 2.743 0 .267.18.578.688.48A10.001 10.001 0 0012.006 2z"
            fillRule="evenodd"
        />
    </svg>
);

const DOCKER = `
    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById("docker").onclick = (event) => {
            event.preventDefault();
            document.getElementById("docker-command").style.display = ""
            document.getElementById("docker-option").style.display = "none"
            document.getElementById("nix-command").style.display = "none"
            document.getElementById("docker-warning").style.display = ""
        };
    });
`;

export default (props: templates.HomePage) => (
    <Site
        title="Reactivated — Zero-configuration Django and React"
        className={css`
            ${styles.style({})}
        `}
    >
        <Helmet>
            <script>{DOCKER}</script>
        </Helmet>
        <div
            className={css`
                ${styles.style({
                    backgroundColor: styles.colors.background,
                })}
            `}
        >
            <div
                className={css`
                    ${styles.style({
                        maxWidth: 1200,
                        margin: "0 auto",

                        paddingLeft: 20,
                        paddingRight: 20,

                        paddingTop: 100,
                        paddingBottom: 75,

                        $mobile: {
                            flexDirection: "column",
                            paddingTop: 20,
                            paddingBottom: 20,
                        },

                        $desktop: {},

                        display: "flex",
                        gap: 30,
                    })}
                `}
            >
                <div
                    className={css`
                        ${{
                            display: "flex",
                            flexDirection: "column",
                            gap: 30,
                        }}
                    `}
                >
                    <h1
                        className={css`
                            ${styles.style({
                                fontSize: 32,
                            })}
                        `}
                    >
                        Zero-configuration Django and React.
                        <br />
                        Together at last.
                    </h1>
                    <div
                        className={css`
                            ${styles.style({
                                fontSize: 18,
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                            })}
                        `}
                    >
                        <p>
                            Reactivated is the easiest way to use Django and React
                            together.
                        </p>
                        <p>
                            You get the full power of Django. Rendered by React{" "}
                            <strong>server-side</strong>.
                        </p>
                        <p>No webpack, no config, no tooling. Just React and Django.</p>
                    </div>
                    <InstallationCommand id="nix-command">
                        nix-shell -E &quot;$(curl -L
                        https://reactivated.io/install/)&quot;
                    </InstallationCommand>
                    <InstallationCommand
                        id="docker-command"
                        style={{display: "none", fontSize: 13.5}}
                    >
                        {outdent`
                        docker run -itv $PWD:/app silviogutierrez/reactivated install my_app
                        `}
                    </InstallationCommand>
                    <div
                        className={css`
                            ${styles.style({
                                display: "flex",
                                gap: 15,

                                $mobile: {
                                    justifyContent: "center",
                                },
                            })}
                        `}
                    >
                        <forms.ButtonLink href="/documentation/getting-started/">
                            Get Started
                        </forms.ButtonLink>
                        <forms.ButtonLink
                            className={css`
                                ${styles.style({gap: 10})}
                            `}
                            href="https://github.com/silviogutierrez/reactivated"
                        >
                            <GitHub />
                            <span
                                className={css`
                                    ${styles.style({display: "flex", gap: 5})}
                                `}
                            >
                                <Star />
                                {props.stars}
                            </span>
                        </forms.ButtonLink>
                        <forms.ButtonLink
                            className={css`
                                ${styles.style({$mobile: {display: "none !important"}})}
                            `}
                            href="https://nixos.org/download.html"
                        >
                            Install Nix
                        </forms.ButtonLink>
                    </div>
                    <p
                        id="docker-option"
                        className={css`
                            ${styles.style({marginTop: -20})}
                        `}
                    >
                        Don‘t have Nix?{" "}
                        <a id="docker" href="#">
                            Use Docker
                        </a>
                    </p>
                    <p
                        id="docker-warning"
                        className={css`
                            ${styles.style({marginTop: -20})}
                        `}
                        style={{display: "none"}}
                    >
                        But you really should be{" "}
                        <a href="/documentation/why-nix/">using Nix</a>.
                    </p>
                </div>
                <div
                    className={css`
                        ${{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                        }}
                    `}
                >
                    
                </div>
            </div>
        </div>
        <div>
            <div
                className={css`
                    ${styles.style({
                        margin: "0 auto",
                        maxWidth: 1200,
                        paddingLeft: 20,
                        paddingRight: 20,

                        display: "flex",
                        flexDirection: "column",
                        gap: 40,
                    })}
                `}
            >
                <div
                    className={css`
                        ${styles.style({
                            display: "flex",
                            paddingLeft: 40,
                            paddingRight: 40,

                            gap: 30,
                            $nest: {
                                "& > *": {
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                },
                            },

                            $mobile: {
                                flexDirection: "column",
                                padding: 0,
                            },
                        })}
                    `}
                >
                    <div>
                        <h2>Type Safe</h2>
                        <p>TypeScript and Mypy built-in. Catch mistakes early.</p>
                    </div>
                    <div>
                        <h2>Deployment Ready</h2>
                        <p>
                            Run one command and have your app live with production
                            settings. SSL included.
                        </p>
                    </div>
                    <div>
                        <h2>No Dependencies</h2>
                        <p>
                            Ok just one. <strong>Nix</strong>. Everything is included
                            and set up for you.
                        </p>
                    </div>
                    <div>
                        <h2>Opinionated</h2>
                        <p>
                            Formatting and linting configured for you. One command to
                            fix it all.
                        </p>
                    </div>
                </div>
                <hr />
                <div
                    className={css`
                        ${styles.style({
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 15,
                            fontSize: 17,
                        })}
                    `}
                >
                    <h2>The full power of Django</h2>
                    <p>
                        Nothing — that’s right, <em>nothing</em> — approaches the
                        productivity of a mature framework like Django.
                    </p>
                    <p>
                        So why cripple its vast feature set by separating the frontend
                        from the backend? REST calls and ad-hoc endpoints is no way to
                        live.
                    </p>
                    <p>
                        Use idiomatic Django. As it was meant to be used: with forms,
                        form sets, views and transactional logic.
                    </p>
                    
                </div>
                
                <Highlight>
                    <div>
                        <h2>Easily add dynamic behavior</h2>
                        <p>
                            The classic problem. Show a field if a certain value is
                            selected on another field.
                        </p>
                        <p>
                            Tricky with traditional Django. <em>Trivial</em> with
                            Reactivated.
                        </p>
                    </div>
                    <div
                        className={css`
                            ${styles.style({})}
                        `}
                    >
                        
                    </div>
                </Highlight>
                <div
                    className={css`
                        ${styles.style({
                            paddingLeft: 50,
                            paddingRight: 50,
                            display: "flex",
                            $nest: {
                                "& > *": {
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                    textAlign: "center",
                                },
                            },

                            $mobile: {
                                flexDirection: "column",
                                gap: 15,
                            },
                        })}
                    `}
                >
                    <div>
                        <h3>Documentation</h3>
                        <Links>
                            <li>
                                <a href="/documentation/getting-started/">
                                    Getting started
                                </a>
                            </li>
                            <li>
                                <a href="/documentation/existing-projects/">
                                    Existing projects
                                </a>
                            </li>
                        </Links>
                    </div>
                    <div>
                        <h3>Community</h3>
                        <Links>
                            <li>
                                <a href="https://github.com/silviogutierrez/reactivated">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/silviogutierrez/reactivated/discussions">
                                    Discussions
                                </a>
                            </li>
                        </Links>
                    </div>
                    <div>
                        <h3>Thoughts</h3>
                        <Links>
                            <li>
                                <a href="/documentation/concepts/">Concepts</a>
                            </li>
                            <li>
                                <a href="/documentation/philosophy-goals/">
                                    Philosophy
                                </a>
                            </li>
                        </Links>
                    </div>
                </div>
            </div>
        </div>
    </Site>
);