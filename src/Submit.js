import React, { Component } from 'react';

import FeedItem from './FeedItem';
import Feed from './Feed';

class Submit extends Component {
  render() {
    return (
      <div>
        <div className="section-hero">
          <div className="section-submit">
            <div className="container">
              <h1 className="hero__heading">Submit a Spreadsheet</h1>
              <div className="hero__sub-heading">Found or made a cool spreadsheet you want to share with the community? Submit it here and we'll review it!</div>
              <div className="submit-wrapper w-form">
                <form className="submit-form" data-name="Submit Spreadsheet" id="wf-form-Submit-Spreadsheet" name="wf-form-Submit-Spreadsheet">
                  <div className="submit-form__rows submit-form__rows--padding">
                    <div className="submit-form__title">Spreadsheet Details</div>
                    <label className="submit-form__label" htmlFor="Link">Spreadsheet url: <span className="submit-form__label--required">(required)</span>
                    </label>
                    <div className="submit-form__field">
                      <input className="submit-form__field__input w-input" data-name="Spreadsheet Url" id="Spreadsheet-Url" maxLength={256} name="Spreadsheet-Url" placeholder="https://docs.google.com/spreadsheets-url" required="required" type="text" />
                    </div>
                    <div>
                      <div className="submit-form__hide-field">
                        <label className="submit-form__label" htmlFor="Spreadsheet-Creator">Spreadsheet creator:</label>
                        <div className="submit-form__sub-title">Please enter the twitter handle of the person that created this spreadsheet, leave this blank if you don't know who created it.</div>
                        <div className="submit-form__field">
                          <input className="submit-form__field__input w-input" data-name="Spreadsheet Creator" id="Spreadsheet-Creator" maxLength={256} name="Spreadsheet-Creator" placeholder="Enter the creator's twitter handle" type="text" />
                        </div>
                      </div>
                      <div>
                        <div className="submit-form__checkbox w-checkbox w-clearfix">
                          <input className="submit-form__checkbox__ticker w-checkbox-input" data-ix="reveal-checkbox" data-name="Is Creator?" id="Is-Creator" name="Is-Creator" type="checkbox" />
                          <label className="field-label-2 w-form-label" htmlFor="Is-Creator">I'm the creator of this spreadsheet</label>
                        </div>
                      </div>
                      <div className="submit-form__reveal-checkbox" data-ix="hide-checkbox-init">
                        <div className="submit-form__checkbox submit-form__checkbox--nested w-checkbox w-clearfix">
                          <input className="submit-form__checkbox__ticker w-checkbox-input" data-name="Is Published?" id="Is-Published" name="Is-Published" type="checkbox" />
                          <label className="field-label w-form-label" htmlFor="Is-Published">Is this Spreadsheet published for the web?</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-form__rows">
                    <div className="submit-form__title">Personal Details</div>
                    <label className="submit-form__label" htmlFor="Tags-2">twitter:</label>
                    <div className="submit-form__sub-title">This is optional, we'll use this to attribute you on the spreadsheet listing.</div>
                    <div className="submit-form__field">
                      <input className="submit-form__field__input w-input" data-name="Submitter Twitter" id="Submitter-Twitter" maxLength={256} name="Submitter-Twitter" placeholder="Enter your twitter handle" type="text" />
                    </div>
                    <label className="submit-form__label" htmlFor="Tags-2">email address: <span className="submit-form__label--required">(required)</span>
                    </label>
                    <div className="submit-form__sub-title">We don't share your email address with anyone, we'll use this to notify you if this spreadsheet gets added to our collection.</div>
                    <div className="submit-form__field">
                      <input className="submit-form__field__input w-input" data-name="Submitter Email" id="Submitter-Email" maxLength={256} name="Submitter-Email" placeholder="Enter your email address" required="required" type="email" />
                    </div>
                  </div>
                  <div className="form__row--last submit-form__rows">
                    <div className="w-clearfix">
                      <input className="submit-form__btn w-button" data-wait="Please wait..." type="submit" defaultValue="Submit Spreadsheet" /><a className="form__btn--danger submit-form__btn" href="#" id="cancel">Cancel</a>
                    </div>
                  </div>
                </form>
                <div className="submit-form__success-message w-form-done">
                  <div className="text-block-5"><span className="text--bold"><strong xmlns="http://www.w3.org/1999/xhtml" className="important-text">Thank you! We have received your submission and will review it shortly!</strong><br xmlns="http://www.w3.org/1999/xhtml" /></span>We'll notify you if your spreadsheet gets added to our collection.</div>
                </div>
                <div className="submit-form__error-message w-form-fail">
                  <div>Something went wrong while submitting your spreadsheet, Make sure you enter all the required fields!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;
