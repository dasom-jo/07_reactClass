import {styled} from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Prod = ({p}) => {
    const navigate= useNavigate();
    return (
        <StyledProd key={p.id} onClick={()=>navigate(`./products/${p.id}`)}>
            <img src={p.thumbnail} alt={p.title + '이미지'}></img>

            <p className='title'>{p.title}</p>

            <span className='percent'>
                {p.discountPercentage.toFixed(0)+'%'}
            </span>

            <span className='price'>
                    {p.price} 달러
            </span>

            <p className='sale_price'>
                {
                    (p.price * (1 - (p.discountPercentage / 100))).toFixed(0)
                } $
            </p>

            <p className='rating'>
                {'⭐'.repeat(p.rating.toFixed(0))}

            </p>
        </StyledProd>
    );
}



const StyledProd = styled.div`
    cursor: pointer;
    border: none;
    padding: 1rem;
    margin: 1rem;
    &:hover {
        box-shadow: 0 2px 10px 0 black
    }
    p{
        margin: 0.3rem;
    }
    img{
        border:2px solid grey;
        align-items: center;
        width: 100%;
        height: 100px;
    }
    .title{
        font-size: 1.4rem;
    }
    .price {
        text-decoration: line-through;
    }
    .percent {
        font-weight: bold;
    }
    .sale_price {
        font-size: larger;
        font-weight:bolder ;
        color:red;
    }
`
export default Prod;