import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function Contact() {
    return (
        <>
            <Navbar text={'Contact'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="contact">
                <div className="contactWrapper">
                    {/* Left */}
                    <div className="cW_left">
                        <div className="cWL_content">
                            <div className="cWLC_img">
                                <figure>
                                    <img src="./img/call 1.png" alt="call 1.png" />
                                </figure>
                            </div>
                            <div className="cWLC_text">
                                <h1>get in touch</h1>
                                <div className="cWLCT_p">
                                    <p>contact@e-comm.ng</p>
                                    <p>+234 4556 6665 34</p>
                                    <p>20 Prince Hakkerem Lekki Phase 1, Lagos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="cW_right">
                        <form action="#">
                            <div className="groupInp">
                                <label htmlFor="fName">Fullname</label>
                                <input type="text" name="fName" id="fName" placeholder="James Doe" />
                            </div>

                            <div className="groupInp">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="jamesdoe@gmail.com" />
                            </div>

                            <div className="groupInp">
                                <label htmlFor="textArea">Message</label>
                                <textarea name="textArea" id="textArea" cols="30" rows="10" placeholder="Type your message"></textarea>
                            </div>

                            <button className="sendInfo">Send</button>
                        </form>
                    </div>
                </div>

                <div className="hS6_search">
                    <div className="hS6S_content">
                        <input type="text" name="hS6Search" id="hS6Search" placeholder="Search query..." />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};