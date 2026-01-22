import {Header} from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage(){
    return(
        <>
            <title>404 Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />

            <Header/>

            <div className='not-found-message'>
                <h1>Page Not Found</h1>
            </div>
        </>

        
    );
}