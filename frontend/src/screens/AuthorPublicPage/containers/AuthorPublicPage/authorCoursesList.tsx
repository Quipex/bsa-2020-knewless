import React from 'react';
import { connect } from 'react-redux';
import { IAuthorCourse } from '../../models/IAuthorCourse';
import { CoursePreview } from '@components/CoursePreview';
import { IAuthorData } from '@screens/AuthorPublicPage/models/IAuthorData';
import styles from './styles.module.sass';
import { RowPlaceholder } from '@components/placeholder/RowPlaceholder';

export interface IAuthorCoursesList {
  authorData: IAuthorData;
  courses: IAuthorCourse[];
}

const CoursesList: React.FC<IAuthorCoursesList> = ({ authorData, courses }) => (
  <>
    {(!courses || courses?.length < 1)
      ? (<RowPlaceholder description="Courses will appear later." webOnLeft={false} />)
      : courses.map(c => (
        <div className={styles.coursePreviewWrapper}>
          <CoursePreview
            key={c.id}
            id={c.id}
            authorName={`${authorData.firstName} ${authorData.lastName}`}
            authorId={authorData.id}
            tags={c.tags.map(tag => tag.name)}
            rating={Math.round(c.positiveReactions / c.allReactions)}
            image={c.imageSrc}
            lecturesNumber={c.lectures}
            durationMinutes={c.duration}
            level={c.level}
            flag={null}
            action={null}
            name={c.name}
            description={c.description}
            members={c?.members}
            ratingCount={c.allReactions}
            className={styles.preview}
          />
        </div>
      ))}
  </>
);

const mapStateToProps = (state: any) => ({
  courses: state.authorPublicData.authorData.courses
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
