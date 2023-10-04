import Card from 'react-bootstrap/Card';
import "./Post.css"
function WithHeaderAndQuoteExample({title, text, timestamp}) {
    return (
        <Card>
{console.log(title)}
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {text}{' '}
                    </p>
                    <footer className="blockquote-footer">
                       {timestamp} Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderAndQuoteExample;