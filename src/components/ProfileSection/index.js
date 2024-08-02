import React from 'react'
import { ProfileContainer, Img, ProfileLeftContainer, ProfileRightContainer, ProfileInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './ProfileStyle'
import ProfileImg from '../../images/ProfileImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const ProfileSection = () => {
    return (
        <div id="about">
            <ProfileContainer>
                <ProfileInnerContainer >
                    <ProfileLeftContainer id="Left">
                        <Title>Hi, I'm <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </ProfileLeftContainer>

                    <ProfileRightContainer id="Right">

                        <Img src={ProfileImg} alt="profile-image" />
                    </ProfileRightContainer>
                </ProfileInnerContainer>

            </ProfileContainer>
        </div>
    )
}

export default ProfileSection