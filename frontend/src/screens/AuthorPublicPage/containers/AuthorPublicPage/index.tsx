import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GoBook } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { TiHeart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import { IBindingCallback1 } from 'models/Callbacks';
import { fetchAuthorDataRoutine, followAuthorRoutine } from '../../routines';
import { IAuthorData } from 'screens/AuthorPublicPage/models/IAuthorData';
import { GradientButton } from 'components/buttons/GradientButton';

import './styles.sass';
import AuthorPublicMenu from './authorPublicMenu';

export interface IAuthorPublic {
  match: any;
  fetchAuthorData: IBindingCallback1<string>;
  authorData: IAuthorData;
  followAuthor: IBindingCallback1<string>;
}

const AuthorPublicPage: React.FunctionComponent<IAuthorPublic> = ({
  match, fetchAuthorData, authorData, followAuthor
}) => {
  useEffect(() => {
    fetchAuthorData(match.params.authorId);
  }, []);

  return (
    <div>
      <div className="headerLine-wrapper" />
      <div className="authorMainContainer">
        <div className="authorAvatar-wrapper">
          <img
            className="authorPublicAvatar"
            src={authorData.avatar}
            alt={`${authorData.firstName} ${authorData.lastName} avatar`}
          />
        </div>
        <div className="authorMainInfo-wrapper">
          <div className="authorName-publicPage">
            {`${authorData.firstName} ${authorData.lastName}`}
          </div>
          {authorData.schoolName === '' ? null
            : (
              <div className="authorKnewlessStatic">
                <Link className="cardSchoolLink-wrapper" to={`/school/${authorData.schoolId}`}>
                  {`Author in ${authorData.schoolName}`}
                </Link>
              </div>
            )}

          {authorData.printFollowButton
            ? (
              <div className="buttonsFollowLikeAuthor">
                <GradientButton
                  className="authorFollowButton"
                  onClick={() => { followAuthor(match.params.authorId); }}
                >
                  Follow
                </GradientButton>
              </div>
            )
            : null}

          <div className="subscribersNumber">
            <p className="authorNumberFollowers">
              {authorData.numberOfSubscribers}
            </p>
            &nbsp; followers
          </div>
          <div className="authorBiography">
            <p>ABOUT AUTHOR</p>
            <p>{authorData.biography}</p>
          </div>
        </div>
        <div className="cardsAuthorPublicPage-wrapper">
          <div className="cardsGridlines">
            <div className="cardCoursesNumber-wrapper">
              <div className="cardStyle-authorPublic">
                <div className="cardMainInfo cardTextField">
                  {authorData.courses.length}
                </div>
                <div className="cardBottomText">
                  Courses
                </div>
              </div>
            </div>
            <div className="separatorRectangleFirst" />

            <div className="cardSchoolLink-wrapper">
              <div className="cardStyle-authorPublic">
                <div className="cardMainInfo cardTextField">
                  35
                </div>
                <div className="cardBottomText">
                  Practices
                </div>
              </div>
            </div>

            <div className="separatorRectangleSecond" />
            <div className="cardArticlesNumber-wrapper">
              <div className="cardStyle-authorPublic">
                <div className="cardMainInfo cardTextField">
                  {authorData.articles.length}
                </div>
                <div className="cardBottomText">
                  Articles
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listCoursesArticles-wrapper">
          <AuthorPublicMenu />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authorData: state.authorPublicData.authorData
});

const mapDispatchToProps = {
  fetchAuthorData: fetchAuthorDataRoutine,
  followAuthor: followAuthorRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPublicPage);