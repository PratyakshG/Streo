import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./detailsBanner/cast/Cast";

import "./details.scss";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Detail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
      />
      <Cast
        data={credits?.cast}
        loading={creditsLoading}
      />
      <VideosSection
        data={data}
        loading={loading}
      />
      <Similar
        id={id}
        mediaType={mediaType}
      />
      <Recommendation
        id={id}
        mediaType={mediaType}
      />
    </div>
  );
};

export default Detail;
