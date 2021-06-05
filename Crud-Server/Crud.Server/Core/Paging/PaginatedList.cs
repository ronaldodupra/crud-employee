using System;
using System.Collections.Generic;
using System.Linq;

namespace BrownieWebApi.Core.Paging
{
    public class PaginatedList<T>
    {
        public IEnumerable<T> Items { get; }

        public int TotalCount { get; }

        public int TotalPages { get; set; }

        public int PageNumber { get; }

        public PaginatedList(IEnumerable<T> items)
            : this(items, items.Count(), 0, 0)
        {
        }

        public PaginatedList(IEnumerable<T> items, int count)
            : this(items, count, 0, 0)
        {
        }

        public PaginatedList(IEnumerable<T> items, int count, PageOptions options)
            : this(items, count, options.PageIndex, options.PageSize)
        {
        }

        public PaginatedList(IEnumerable<T> items, int count, int pageIndex, int pageSize)
        {
            Items = items;
            PageNumber = pageIndex;
            TotalCount = count;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
        }

        public PaginatedList<R> Select<R>(Func<T, R> func)
        {
            var items = Items.Select(func);

            return new PaginatedList<R>(items, TotalCount);
        }
    }
}