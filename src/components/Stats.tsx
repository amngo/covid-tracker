import useRequest from "hooks";

function Stats() {
  const { data, isLoading }: { data: any; isLoading: boolean } = useRequest(
    "https://disease.sh/v3/covid-19/all",
  );

  return !isLoading ? (
    <div className="mx-auto shadow stats stats-vertical md:stats-horizontal">
      <div className="stat">
        <div className="stat-title">Cases</div>
        <div className="stat-value text-info">
          {(data.cases - data.todayCases).toLocaleString()}
        </div>
        <div className="stat-desc">
          <div>
            +{data.todayCases.toLocaleString()} <span>today</span>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Recovered</div>
        <div className="stat-value text-success">
          {(data.recovered - data.todayRecovered).toLocaleString()}
        </div>
        <div className="stat-desc">
          <div>
            +{data.todayRecovered.toLocaleString()} <span>today</span>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Deaths</div>
        <div className="stat-value text-error">
          {(data.deaths - data.todayDeaths).toLocaleString()}
        </div>
        <div className="stat-desc">
          <div>
            +{data.todayDeaths.toLocaleString()} <span>today</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Stats;
