import styled from 'styled-components'
import {useState} from 'react'
import Answer from './Faq4/index'
import Answer2 from './Faq2/index'
import Answer3 from './Faq1/index'
const arrowWhite = '/assets/icons/arrow-white.svg'
const arrowBlack = '/assets/icons/arrow-black.svg'
const FAQWrapper = styled.div`
    width: 100%;
    background: ${
        props => props.type === "black" 
            ? "#141414" : "#F7F7F7"
    };
    
    font-size: 25px;
    line-height: 30px;
    padding: 25px;
    
    color: ${
        props => props.type === "black" 
            ? "white" : "#141414" 
    };
    li{
        text-decoration:none;
        list-style-type:none;
        font-size: 25px;
        font-family: 'Orator Std';
        line-height: 35px;
        font-weight: 400;
       
        margin-top:2rem; 
    }
    .arrow-img{
        margin-right: 20px;
        cursor: pointer; 
    }
    .arrow-right{
        transform: rotateZ(-90deg);
    }
    .faq-question{
        padding-left:30%;
        display:flex;
        align-items:center;
        width: 100%: 
    }
    p{
        line-height:unset;
        margin-bottom:0 !important;
    }
    .faq-answer{
        min-height: 90vh;
        display:flex;
        flex-direction: column;
        align-items:center !important;
        justify-content:start;
        grid-gap:2px;
        list-style: none;
        @media (max-width: 1660px){
            padding: 80px;
            padding-top:50px;
            padding-left:15%;
            padding-right:15%;
            
        }
    }
    @media only screen and (max-width: 768px) {
        font-size:large;
        .faq-question{
            width:unset;
            padding-left:3%;
            line-height:unset;
            font-size:small;
        }
        .faq-answer{
            margin-left:1.75rem;
            margin-right:1.75rem;
            margin-top:1rem;
            padding: 20px;
        }
    }
`

const Wrapper = styled.div`
    background: #F7F7F7;;

`

const FAQ = (props) => {
    const [isShow, setShow] = useState(false)
    const toggleShow = () => setShow(!isShow)
    return <FAQWrapper type={props.type}>
        <div className="faq-question ">
            <img src={props.type === "white" ? arrowBlack : arrowWhite} onClick={toggleShow} className={`arrow-img ${isShow ? "" : "arrow-right"}`} />
            <p>{props.question}</p>
        </div> 
        {
            isShow ? props.num==1 || props.num==4 
            ? 
           
            <div className="faq-answer">
                <Answer heading={props.heading} answer={props.answer}/>
            </div>
            :
            props.num==6?
            <div className="faq-answer "><Answer heading={props.heading} answer={props.answer}/></div>
            : props.num==2?
            <Answer3 />
            : 
            <div className=""><Answer2 /></div>:""
        } 
    </FAQWrapper>
}

const FAQs = () => {
    const faqs = [
        {
            question: 'shitcoins, cheap!',
            type: 'black',
            num: 1,
            heading: `we're the shit`,
            answer:[ "every coin starts as a shitcoin, worthless, yet full of hope. what does it take to turn shit into gold? its the power of crowds and community that brings shit to life.","shitcoins are an experiment in community and the transformation of value. ","to begin with, these coins are shit. but guaranteed you’ve never seen shit like this before. a look under the hood will reveal a truly novel smart contract laying the groundwork for the most ambitious royalty distribution mechanics ever attempted on the blockchain.","we call it: the infinite diluting royalty contract","the infinite diluting royalty contract has the potential to prevent pump and dumbps, rug pulls, wash trading, and change tokenized ownership forever."]
        },
        {   num: 2,
            question: 'How $hitcoins work',
            type: 'white',
        
        answer:[]

    },
        {
            question: 'The Infinite Diluting Royalty Smart Contract',
            type: 'black',
            num: 3,
            answer:[]

        },
        {
            question: 'the art is shit',
            type: 'white',
            num: 4,
            heading:"the most complex shit ever made",
            answer:["A shitty emoji floats optimistically in space anticipating its dramatic transformation from shit to shinola.","the shit dao runs a bot to assess the total market value of the $hitcoin collection based on the most recent sale price of each nft in the shit show.","when the shitbot determines that the total market value of the $hitcoin collection exceeds $1,000,000 USD all of our shit will transform from shit brown to penny copper.",
"when the shitbot determines that the total market value of the $hitcoin collection exceeds $10,000,000 USD all of our shit will transform from penny copper to silver."]

        },
        {
            question: 'When is $hit happening? ',
            type: 'black',
            num: 5,
            answer:[]
        },
        {
            question: ' Who made this $hit? ',
            type: 'white',
            num: 6,
            heading:"",
            answer:["Metafive","spacecowboy","rob-eth","pk$"]
        }
    ]

    return <Wrapper>
        {
            faqs.map((faq, i) => {
                return <FAQ num={faq.num} answer={faq.answer} heading={faq.heading} question={faq.question} type={faq.type} />
            })
        }
    </Wrapper>
}

export default FAQs 
