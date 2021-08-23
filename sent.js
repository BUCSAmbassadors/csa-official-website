var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Boston University's Computer Science Ambassadors" />
        <meta name="keywords" content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science" />
        <title>BU CS Ambassadors | Email Sent</title>
        <link rel="stylesheet" href="/static/css/main.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap" rel="stylesheet" /> 
        <link rel="shortcut icon" sizes="32x32" href="/static/images/reg logo no background small.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <section className="sentPage">
          <div className="shapes-layer">
            <div className="greentriangle shape rellax" data-rellax-speed={1}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/greentriangle.png" alt="" />
            </div>
            <div className="purpleline shape rellax" data-rellax-speed={-2}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/purpleline.png" alt="" />
            </div>
            <div className="yellowsqrhole shape rellax" data-rellax-speed={-3}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/yellowemptysqr.png" alt="" />
            </div>
            <div className="redsmallhex shape rellax" data-rellax-speed={3}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/redsmallhex.png" alt="" />
            </div>
            <div className="largegreencircle shape rellax" data-rellax-speed={-4}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/largegreencircle.png" alt="" />
            </div>
            <div className="blueline shape rellax" data-rellax-speed={-3}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/blueline.png" alt="" />
            </div>
            <div className="greencirclehollow shape rellax" data-rellax-speed={2}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/greencirclehollow.png" alt="" />
            </div>
            <div className="purplecircle shape rellax" data-rellax-speed={2}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/purplecircle.png" alt="" />
            </div>
            <div className="yellowline shape rellax" data-rellax-speed={-3}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/yellowline.png" alt="" />
            </div>
            <div className="tinygreencircle shape rellax" data-rellax-speed={4}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/tinygreencircle.png" alt="" />
            </div>
            <div className="bluetri shape rellax" data-rellax-speed={-3}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/bluetri.png" alt="" />
            </div>
            <div className="greenline shape rellax" data-rellax-speed={-2}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/greenline.png" alt="" />
            </div>
            <div className="largeredhex shape rellax" data-rellax-speed={5}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/largeredhex.png" alt="" />
            </div>
            <div className="smallyellowsqr shape rellax" data-rellax-speed={-4}>
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/smallyellowsqr.png" alt="" />
            </div>
          </div>
          <div className="sentPage-content">
            <div className="sentPage-content-text">
              <h2>Email has been sent!</h2>
              <h4>Thanks for reaching out to us! One of our Ambassadors will get back to you as soon as possible.</h4>
              <button type="button" className="btn-blktored" onclick="location.href='index.html'">
                Continue
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
});
