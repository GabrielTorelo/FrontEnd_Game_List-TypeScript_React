import { ReactNode } from 'react';
import getSetColorScheme from '../hooks/getSetColorScheme';
import { Header, Footer } from "../../../presentation/components";

const DefaultProvider = ({ children }: { children: ReactNode }) => {
    const { mode, dispatch } = getSetColorScheme();

    return (
        <div className="container">
            <Header mode={mode} dispatch={dispatch} />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultProvider;
