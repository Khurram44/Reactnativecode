import React, { FC } from "react";

import { Heading, SubHeading, ExtraText, Illustration, Dots } from "../Styles/OnboardingStyle";
interface Props {
    heading: string,
    subheading: string,
    extraText: string,
    illustration: any,
    dots: any
}

const Onboardingscreen1: FC<Props> = (data) => {
    // const navigation = useNavigation<Authtype>();
    return (
        <>
            <Heading>
                {data.heading}
            </Heading>
            <SubHeading>
                {data.subheading}
            </SubHeading>
            <ExtraText>
                {data.extraText}
            </ExtraText>
            <Illustration source={data.illustration} />
            <Dots source={data.dots} />
        </>


    )
}
export default Onboardingscreen1;