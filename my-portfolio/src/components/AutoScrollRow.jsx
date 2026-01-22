export default function AutoScrollRow({ items = [], ariaLabel = "Skills row" }) {
  return (
    <div className="autoRowWrap" role="region" aria-label={ariaLabel}>
      <div className="autoRow">
        <div className="autoTrack">
          {[...items, ...items].map((item, idx) => (
            <div className="autoItem" key={`${item.key}-${idx}`} title={item.label}>
              <span className="autoIcon" style={{ color: item.color }}>
                {item.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
