const BackgroundHeader: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner darken">
        <div className="item active">
          <div className="container">
            <div className="carousel-caption">
              <span className="txt_header">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BackgroundHeader;
