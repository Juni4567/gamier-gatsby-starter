import React from "react";
import Content from "../Content";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const ArticleTemplate = ({
  content,
  contentComponent,
  cover,
  meta_title,
  meta_desc,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <div className="article-header">
        <div className="columns is-vcentered is-centered">
          <div className="column is-offset-2">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
          <div className="column is-5">
            <img className="cover-image" src={cover} alt={title} />
          </div>
        </div>
      </div>
      <div className="container content article-body">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags && tags.length
                  ? tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTemplate;
