import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <section className="faq-page">

        <div className="secondary-banner">
            <img src="/images/FAQs/background.jpg" alt=""/>
            <div className="paper-gradient"></div>
        </div>

        <div className="faq-section padding-inline">
            <picture>
                <source media="(max-width: 500px)" srcset="/images/Piercings/mobile.png"/>
                <img  className="faq-section1-background" src="/images/Piercings/piercings-price-background.png" alt=""/>
            </picture>

            <h1 className="faq-title">FREQUENTLY ASKED<br/>
                <span>
                    <img src="/images/FAQs/title-left.png" alt=""/>
                    QUESTIONS
                    <img src="/images/FAQs/title-right.png" alt=""/>
                </span>
            </h1>

            <img className="faq-flower" src="/images/FAQs/flower.png" alt=""/>
            <img className="faq-bird" src="/images/FAQs/bird.png" alt=""/>

            <ul className="faq-list FAQList">
                
                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">I haven't heard from my artist since I booked...should I still show up?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et 
                            velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam 
                            voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?
                        </div>
                    </div>
                </li>


                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">Are Tattoos Safe?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Yes, as long as you go to a reputable tattoo artist that is following all recommended safety 
                            precautions. Make sure you’re completely honest with your tattoo artist regarding any medical 
                            condition you may have or if prone to fainting. We always recommend getting a good night sleep, 
                            having a full meal and some sugar before getting a tattoo to alleviate dizziness, nausea, and to 
                            increase your pain tolerance. Getting a tattoo with a low blood sugar level is not ideal.
                        </div>
                    </div>
                </li>


                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">Do Tattoos Hurt?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et 
                            velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam 
                            voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?
                        </div>
                    </div>
                </li>


                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">Can I bring a Friend/Family for moral support?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et 
                            velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam 
                            voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?
                        </div>
                    </div>
                </li>


                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">How do I take care of my tattoo afterwards?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et 
                            velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam 
                            voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?
                        </div>
                    </div>
                </li>


                <li className="faq-question1 FAQEntry"  id="" title="">
                    <h2 className="js-FAQH FAQEntry__heading"><span className="faq-plus"></span><span className="faq-spacer"></span>
                    
                    <a href="">My Ink Still Hasn't Healed...What Gives?</a></h2>

                    <div className="FAQEntry__body">
                        <div className="FAQEntry__bodyPos group">
                            Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et 
                            velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam 
                            voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </section>
    );
}

export default FAQ; 