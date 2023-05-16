import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <section class="faq-page">

        <div class="secondary-banner">
            <img src="/Content/images/FAQs/background.jpg" alt=""/>
            <div class="paper-gradient"></div>
        </div>

        <div class="faq-section padding-inline">
            <picture>
                <source media="(max-width: 500px)" srcset="/Content/images/Piercings/mobile.png"/>
                <img  class="faq-section1-background" src="/Content/images/Piercings/piercings-price-background.png" alt=""/>
            </picture>

            <h1 class="faq-title" >FREQUENTLY ASKED<br/>
                <span>
                    <img src="/Content/images/FAQs/title-left.png" alt=""/>
                    QUESTIONS
                    <img src="/Content/images/FAQs/title-right.png" alt=""/>
                </span>
            </h1>

            <img class="faq-flower" src="/Content/images/FAQs/flower.png" alt=""/>
            <img class="faq-bird" src="/Content/images/FAQs/bird.png" alt=""/>

            <ul class="faq-list FAQList">
                
                <%  foreach ( var item in Model.ChildPages ) { %>
                    <li class="faq-question1 FAQEntry"  id="Q_<%: item.UrlSegment %>" title="<%:item.Data.QuestionTitle %>">

                        <h2 class="js-FAQH FAQEntry__heading"><span class="faq-plus"></span><span class="faq-spacer"></span><a href="#Q_<%: item.UrlSegment %>"> <%: item.Data.Question %></a></h2>
    
                        <div class="FAQEntry__body">
                            <div class="FAQEntry__bodyPos group"><%: item.Data.Answer %></div>
                        </div>
                    </li>
                <%  } %>

                
            </ul>
        </div>
    </section>
    );
}

export default FAQ; 