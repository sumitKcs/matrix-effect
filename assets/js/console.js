export default function consoleText() {
  console.clear();
  const styles = [
    "color: white",
    "background: rgba(238,58,136,1)",
    "font-size: 18px",
    "padding: 12px",
    "margin: 6px 0 6px 14px",
  ].join(";");
  const styles2 = [
    "font-size: 14px",
    "padding: 16px",
    "margin: 6px 0 6px 0",
    "color: rgba(238,58,136,1)",
  ].join(";");
  console.log("%cHey! I'm Sumit.", styles);
  console.log("%cThank you for checking out my work!", styles2);
  const gradient = [
    "font-size: 14px",
    "color: #fff",
    "width: 200px",
    "padding: 8px",
    "margin: 6px 0 6px 14px",
    "border-radius: 4px",
    "background: rgba(238,58,136,1)",
    "background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
  ].join(";");
  console.log("%cTwitter %chttps://bit.ly/3Ide5GF", gradient, styles2);
  console.log("%cLinkedin %chttps://bit.ly/3HOPx5r", gradient, styles2);
  console.log("%cGithub   %chttps://bit.ly/3lkoNSO", gradient, styles2);
  console.log("%cThe README   %chttp://bit.ly/3XncvpY", gradient, styles2);
  console.log("%cHave a wonderful day!", styles2);
}
