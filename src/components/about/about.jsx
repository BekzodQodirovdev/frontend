import { AboutFn } from "./about_function";

export const About = () => {
    return (
        <div className="container">
            <div className="about__block">
                <div className="about__left_block">
                    <h2 className="about__title">
                        What’s different about Manage?
                    </h2>
                    <p className="about__sub_title">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.{" "}
                    </p>
                </div>
                <div className="about__right_block">
                    <AboutFn
                        btn_number={"01"}
                        title={"Track company-wide progress"}
                        sub_title={
                            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
                        }
                    />
                    <AboutFn
                        btn_number={"02"}
                        title={"Advanced built-in reports"}
                        sub_title={
                            "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
                        }
                    />
                    <AboutFn
                        btn_number={"03"}
                        title={"Everything you need in one place"}
                        sub_title={
                            "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
                        }
                    />
                </div>
            </div>
        </div>
    );
};
