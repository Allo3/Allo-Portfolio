'use client'
import "./page.css"
import {Intro} from "@/app/shared/components/homepage/intro";
import {Projects} from "@/app/shared/components/homepage/projects/projects";
import {useState} from "react";
import {createContact} from "../../lib/api";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMissingField, setErrorMissingField] = useState(false);
    const [success, setSuccess] = useState(false);
    const [debounceDisableButton, setDebounceDisableButton] = useState(false);

    const sendEmail = async () => {
        setDebounceDisableButton(true);
        try {
            console.log("name", name);
            console.log("email", email);
            console.log("message", message);
            if (name && email && message) {
                console.log("name && email && message", name && email && message);
                await createContact({data:{name, email, message}})
                setSuccess(true);
                setEmail("");
                setName("");
                setMessage("");
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            } else {
                setErrorMissingField(true);
                setTimeout(() => {
                    setErrorMissingField(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des projets ou des tags :", error);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        setTimeout(() => {
            setDebounceDisableButton(false);
        }, 5000);
        return false;
    };

    return (
        <main>
            <Intro/>
            <div className="project-list">
                <div className="pro-title">
                    <div className="home-title">
                        <h2><span>#</span>Projets</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
                        </svg>
                    </div>
                </div>
            </div>
            <Projects/>
            <div className="contact">
                <div className="contact-head">
                    <div className="home-title">
                        <h2><span>#</span>Contact</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
                        </svg>
                    </div>
                    <div className="contact-container">
                        <form>
                            <input name="name" type="text" className="feedback-input" placeholder="Name"
                                   value={name} onChange={(event) => setName(event.target.value)}/>
                            <input name="email" type="text" className="feedback-input" placeholder="Email"
                                   value={email} onChange={(event) => setEmail(event.target.value)}/>
                            <textarea name="text" className="feedback-input" placeholder="Comment" value={message}
                                      onChange={(event) => setMessage(event.target.value)}></textarea>
                            <button className="custom-btn btn-14" type="button" onClick={sendEmail} disabled={debounceDisableButton}>SUBMIT</button>
                        </form>
                        <div className="contact-infos">
                            <a href="https://www.google.com/maps/place/Lyon" target="_blank">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="white"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.5264 5.06211C19.1917 7.81864 19.1917 12.2636 16.5264 15.0201L11.7002 20.0001L6.87393 15.0211C4.20869 12.2646 4.20869 7.81964 6.87393 5.06311C8.15004 3.74291 9.88743 3.00019 11.7 3C13.5125 2.99981 15.2501 3.74218 16.5264 5.06211Z"
                                          stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M14.4301 9.61108C14.4124 11.153 13.1824 12.3901 11.679 12.378C10.1755 12.3659 8.96452 11.1093 8.97036 9.56721C8.9762 8.02514 10.1966 6.77818 11.7001 6.77808C13.2167 6.78744 14.4388 8.05567 14.4301 9.61108Z"
                                          stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                                Lyon, France
                            </a>
                            <a href="mailto:allo.louchet@gmail.com">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                                allo.louchet@gmail.com
                            </a>
                            <a href="https://github.com/Allo3" target="_blank">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     stroke="#000000">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z"
                                            fill="#fff"></path>
                                    </g>
                                </svg>
                                github.com/Allo3
                            </a>
                        </div>
                    </div>
                    <div className="contact-event">
                        {error && <span className="error">Une erreur est survenue</span>}
                        {errorMissingField && <span className="error">Veuillez remplir tous les champs</span>}
                        {success && <span className="success">Merci pour votre message !</span>}
                    </div>

                </div>
            </div>
        </main>)
}