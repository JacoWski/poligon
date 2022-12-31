import React, { useState } from "react";
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import { Button } from "components/Form";
import 'components/Card/Card.css';

const Content = ({ intro, showMore, children }) => {
    const [more, setMore] = useState(false);
    return(
        <div>
            <p id="card-intro">{intro}</p>
            {showMore &&
                <div className="content">
                    {more && <p>{children}</p>}
                    <Button icon={more ? SolidIcons.faChevronUp : SolidIcons.faChevronDown}
                        handler={() => setMore(!more)}
                        label={!more ? 'Show more' : 'Show less'}
                        placement={'right'}
                    />
                </div>
            }
        </div>
    );
};

export default Content;
