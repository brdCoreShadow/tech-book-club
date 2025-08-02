import * as SC from "./MembershipListStyled";

const MembershipList: React.FC = () => {
  return (
    <SC.MembershipCon>
      <h3>Membership options</h3>
      <SC.MembershipListStyled>
        <SC.Item>
          <h3>Starter</h3>
          <SC.Price>
            <span>$19 </span> /month
          </SC.Price>
          <SC.SubList>
            <SC.SubItem>1 book/month</SC.SubItem>
            <SC.SubItem>Online forums</SC.SubItem>
          </SC.SubList>
          <SC.Btn>subscribe now</SC.Btn>
        </SC.Item>
        <SC.Item>
          <h3>Pro</h3>
          <SC.Price>
            <span>$29 </span> /month
          </SC.Price>
          <SC.SubList>
            <SC.SubItem>2 book/month</SC.SubItem>
            <SC.SubItem>Virtual meetups</SC.SubItem>
          </SC.SubList>
          <SC.Btn>subscribe now</SC.Btn>
        </SC.Item>
        <SC.Item>
          <h3>Enterprise</h3>
          <SC.Custom>Custom</SC.Custom>
          <SC.SubList>
            <SC.SubItem>Team access</SC.SubItem>
            <SC.SubItem>Private sessions</SC.SubItem>
          </SC.SubList>
          <SC.Btn>talk to us</SC.Btn>
        </SC.Item>
      </SC.MembershipListStyled>
    </SC.MembershipCon>
  );
};

export default MembershipList;
