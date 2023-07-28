type PostListProps = {
  files: string[];
};

export default function PostList(props: PostListProps) {
  const { files } = props;
  return (
    <Head>
<script type="text/javascript">!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
</script><script type="text/javascript">window.Beacon('init', '1507132f-fad2-434d-ad35-0f7fe289d0d0')</script>
</Head>
    <ul class="list-disc ml-5 mr-5 group">
      {files.map((file: string) => {
        const postFile = file.split(".");
        const linkText = postFile[0].replaceAll("_", " ");
        return (
          <li>
            <a
              class="text-xl hover:underline"
              href={`/${postFile[0]}.${postFile[1]}`}
            >
              {linkText} - {postFile[1]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
