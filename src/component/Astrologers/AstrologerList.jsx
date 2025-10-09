import HeaderBreadcrumb from "../HeaderBreadcrumb";
import { useFilterMutations } from "./hook/use-filter-mutations";
import AstrologerCard from "./AstrologerCard";
import { MetaPagination } from "../Pagination/Pagination";


const AstrologerList = () => {
  const {
    SORT_OPTIONS,
    selectedSort,
    setSelectedSort,
    handleFilterChange,
    filterOptions,
    data,
    loading,
    filters,
    pagination,
    handlePageChange,
  } = useFilterMutations();

  return (
    <>
      <HeaderBreadcrumb />

      <div className="container my-4">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Sort By</h5>
                <div className="list-group mb-3">
                  {Object.keys(SORT_OPTIONS).map((option) => (
                    <label
                      key={option}
                      className="list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <input
                        type="radio"
                        name="sort"
                        value={option}
                        checked={selectedSort === option}
                        onChange={() => setSelectedSort(option)}
                        className="form-check-input me-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                <h5 className="card-title">Filters</h5>

                {/* Languages */}
                <div className="mb-3">
                  <label className="form-label">Languages</label>
                  <select
                    value={filters.languagesSpoken}
                    onChange={(e) =>
                      handleFilterChange("languagesSpoken", e.target.value)
                    }
                    className="form-select"
                  >
                    <option value="">All</option>
                    {filterOptions.languagesList.map((lang) => (
                      <option key={lang.id} value={lang.name}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div className="mb-3">
                  <label className="form-label">Experience (Years)</label>
                  <input
                    type="number"
                    min={0}
                    value={filters.experienceYrs}
                    onChange={(e) =>
                      handleFilterChange("experienceYrs", e.target.value)
                    }
                    className="form-control"
                    placeholder="e.g., 10"
                  />
                </div>

                {/* Skills */}
                <div className="mb-3">
                  <label className="form-label">Primary Skills</label>
                  <select
                    value={filters.primarySkills}
                    onChange={(e) =>
                      handleFilterChange("primarySkills", e.target.value)
                    }
                    className="form-select"
                  >
                    <option value="">All</option>
                    {filterOptions.skills.map((skill) => (
                      <option key={skill.id} value={skill.name}>
                        {skill.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="form-select"
                  >
                    <option value="">All</option>
                    {filterOptions.categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    value={filters.gender}
                    onChange={(e) =>
                      handleFilterChange("gender", e.target.value)
                    }
                    className="form-select"
                  >
                    <option value="">All</option>
                    {filterOptions.gendersList.map((g) => (
                      <option key={g.id} value={g.name}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="col-md-9">
            {loading ? (
              <p>Loading astrologers...</p>
            ) : data.length === 0 ? (
              <p>No astrologers found.</p>
            ) : (
              <>
                <div className="row g-3">
                  {data.map((astrologer) => (
                    <AstrologerCard
                      key={astrologer.id}
                      data={astrologer}
                      type="astrologer"
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-4 d-flex justify-content-center">
                  <MetaPagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                  />
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default AstrologerList;
