import * as SC from "./JourneyStyled"

const Journey:React.FC = () => {
    return ( 
        <SC.MainCon>
            <h3>Your tech reading journey</h3>
            <SC.List>
                <SC.Item>
                    <SC.Number>
                        <p>1</p>
                    </SC.Number>
                    <SC.Content>Choose your membership tier</SC.Content>
                </SC.Item>
                <SC.Item>
                     <SC.Number>
                        <p>2</p>
                    </SC.Number>
                    <SC.Content>Get your monthly book selection</SC.Content>
                </SC.Item>
                <SC.Item>
                     <SC.Number>
                        <p>3</p>
                    </SC.Number>
                    <SC.Content>Join our discussion forums</SC.Content>
                </SC.Item>
                <SC.Item>
                     <SC.Number>
                        <p>4</p>
                    </SC.Number>
                    <SC.Content>Attend exclusive meetups</SC.Content>
                </SC.Item>
            </SC.List>

        </SC.MainCon>
     );
}
 
export default Journey;