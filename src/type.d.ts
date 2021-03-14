type BlogAppStore = {
  blogs: BlogState;
  theme: string; 
  members: Array<Member> 
};

type BlogState = {
  list: Array<Blog>,
  selectedBlog: {
    blog: Blog;
    index: number;
  }
  filters:Array<Filter>;
}

type Blog = {
  details: string;
  photo: string;
  title: string;
  type: string;
};

type Filter = {
  name : string;
  checked : boolean;
}

type BlogAction = {
  type: string;
  data: Blog|Array<Blog>|Array<Filter>|UpdateFilterActionBlogAction|SelectedBlogAction;
};

type ThemeAction = {
  type: string;
  theme: string;
};

type UpdateFilterActionBlogAction = {
  index: number;
  filter: Filter
}

type SelectedBlogAction = {
  blog: Blog;
  index: number;
};

type UpdateBlogsAction = {
  blog: Blog;
  index: number;
};

type Member = {
  name: string,
  photo: string,
  username: string,
}

type MemberAction = {
  type: string;
  payload: Array<Member>;
}

