import Button from '@components/Button/Button';
import React from 'react';
import FormItem from './FormItem';
import style from '../styles.module.scss';
const Review = () => {
    const {
        containerReview,
        review,
        noReview,
        replyForm,
        commentReplyTitle, 
        commentFormCookiesConsent,
        btnSubmit
    } = style;
    return (
        <div className={containerReview}>
            <div className={review}>Review</div>

            <p className={noReview}>There are no reviews yet.</p>

            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    Be the first to review “10K Yellow Gold”
                </div>

                <p className={commentReplyTitle}>
                    Your email address will not be published. Required fields
                    are marked
                </p>

                <form action=''>
                    {/* Rating */}
                    <FormItem
                        label={'Your rating'}
                        tyeChildren={'rating'}
                        isRequired={true}
                    />

                    {/* You Review  */}
                    <FormItem
                        label={'Your review'}
                        tyeChildren={'textarea'}
                        isRequired={true}
                    />

                    {/* Name  */}
                    <FormItem
                        label={'Name'}
                        tyeChildren={'input'}
                        isRequired={true}
                    />

                    {/* Email  */}
                    <FormItem
                        label={'Email'}
                        tyeChildren={'input'}
                        isRequired={true}
                    />

                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment
                        </span>
                    </div>

                   <div className={btnSubmit}>
                   <Button content={'Submit'} />
                   </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
