type ThemeAction = {
  type: string;
  theme: string;
};

type FilterAction = {
  type: string;
  filters: Array<Filter>;
  filter?: Filter;
  index?: number;
};

type Filter = {
  name : string;
  checked : boolean;
}

type BlogAction = {
  type: string;
  data: Array<Blog>;
  blog?: Blog;
  index?: number;
};

type SelectedBlogAction = {
  type: string;
  blog: Blog;
  index: number;
};

type BlogAppStore = {
  blogs: Array<Blog>;
  theme: string;
  selectedBlog: {
    blog: Blog;
    index: number;
  };
  filters:Array<Filter>
};

type Blog = {
  details: string;
  photo: string;
  title: string;
  type: string;
};
