import React from 'react';

const Cardx = ({username, userGrade, children}) => {
    return (
        <div className="cardx">
            <div className="aligned-flex mr-bt-sm">
                <span className="cardx-profile"></span>
                <div className="cardx-userDetails">
                    <h4 className="cardx-heading ">
                        {username}
                    </h4>
                    <p className="cardx-paragraph">
                        {userGrade}
                    </p>
                </div>
            </div>
            <div className="cardx-description">
                {children}
            </div>
        </div>
    );
};

export default Cardx;