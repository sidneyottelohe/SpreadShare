import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div>
        <div className="section-hero">
          <div className="hero hero--small">
            <div className="container">
              <h1 className="hero__heading">Subscribe</h1>
              <div className="hero__sub-heading">Subscribe to our newsletter to receive updates in your inbox.</div>
            </div>
          </div>
        </div>
        <main className="main">
          <section className="section-main">
            <div className="container">
              <div className="w-embed">
                <div id="mc_embed_signup" className="subscribe-form">
                  <form action="//spreadshare.us11.list-manage.com/subscribe/post?u=be8ef0298b3083a07eeddabb3&id=b103fcc01f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      {/*  form input email field  */}
                      <div className="mc-field-group">
                        <label className="w-form-label subscribe-field-label" htmlFor="mce-EMAIL">Email Address<span className="asterisk">*</span> </label>
                        <div className="checkbox-wrapper">
                          <input type="email" defaultValue name="EMAIL" className="required email w-input subscribe-form-field" id="mce-EMAIL" placeholder="Please enter your email address" />
                        </div>
                      </div>
                      {/*  subscription type checkboxes  */}
                      <div className="mc-field-group input-group">
                        <h4 className="subscribe-form-title">Subscription Type</h4>
                        <div className="subscribe-form-help">Select which newsletters you would to receive</div>
                        <div className="checkbox-wrapper">
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={1} name="group[14125][1]" className="checkbox-chimp-ticker" id="mce-group[14125]-14125-0" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14125]-14125-0">Daily</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={2} name="group[14125][2]" className="checkbox-chimp-ticker" id="mce-group[14125]-14125-1" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14125]-14125-1">Weekly</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={4} name="group[14125][4]" className="checkbox-chimp-ticker" id="mce-group[14125]-14125-2" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14125]-14125-2">Monthly</label>
                          </div>
                        </div>
                      </div>
                      {/*  topics checkboxes  */}
                      <div className="mc-field-group input-group">
                        <h4 className="subscribe-form-title">Topics</h4>
                        <div className="subscribe-form-help">Select the topics from which you'd like to recieve weekly/monthly updates</div>
                        <div className="checkbox-wrapper">
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={8} name="group[14133][8]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-0" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-0">Finance</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={16} name="group[14133][16]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-1" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-1">Product</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={32} name="group[14133][32]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-2" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-2">People</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={64} name="group[14133][64]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-3" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-3">Growth</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={128} name="group[14133][128]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-4" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-4">Inspiration</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={256} name="group[14133][256]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-5" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-5">Tech</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={512} name="group[14133][512]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-6" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-6">Business</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={1024} name="group[14133][1024]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-7" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-7">Operations</label>
                          </div>
                          <div className="checkbox-chimp">
                            <input type="checkbox" defaultValue={2048} name="group[14133][2048]" className="checkbox-chimp-ticker" id="mce-group[14133]-14133-8" defaultChecked />
                            <label className="w-form-label checkbox-chimp-label" htmlFor="mce-group[14133]-14133-8">Data</label>
                          </div>
                        </div>
                      </div>
                      {/*  error / success messages  */}
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display: 'none'}} />
                        <div className="response" id="mce-success-response" style={{display: 'none'}} />
                      </div>
                      {/*  real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                        <input type="text" name="b_be8ef0298b3083a07eeddabb3_b103fcc01f" tabIndex={-1} defaultValue />
                      </div>
                      <input type="submit" defaultValue="Confirm Subscription" name="subscribe" id="mc-embedded-subscribe" className="w-button subscribe-form-submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Subscribe;
